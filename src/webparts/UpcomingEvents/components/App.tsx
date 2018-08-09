import * as React from "react";
import client from "@culturehq/client";

import CHQEvent, { ICHQEvent } from "../lib/event";

import EventCardSet from "./EventCardSet";
import EventPlaceholder from "./EventPlaceholder";
import Failure from "./Failure";
import NoEvents from "./NoEvents";
import TokenNotSet from "./TokenNotSet";

export interface IAppProps {
  token: string;
  maxHeight?: number;
}

export interface IAppState {
  events: ICHQEvent[];
  failure: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  private componentIsMounted: boolean;

  constructor(props: IAppProps) {
    super(props);
    this.state = { events: null, failure: false };
  }

  public componentDidMount() {
    this.componentIsMounted = true;
    this.attemptFetch();
  }

  public componentDidUpdate(prevProps: IAppProps, prevState: IAppState) {
    const { token } = this.props;

    if (prevProps.token === token) {
      return;
    }

    this.mountedSetState({ events: null, failure: false });
    this.attemptFetch();
  }

  public componentWillUnmount() {
    this.componentIsMounted = false;
  }

  public componentDidCatch() {
    this.mountedSetState({ events: null, failure: true });
  }

  private mountedSetState(newState: IAppState) {
    if (this.componentIsMounted) {
      this.setState(newState);
    }
  }

  private attemptFetch() {
    const { token } = this.props;

    if (!token || token.length !== 24) {
      return;
    }

    client.setToken(token);

    client.autoPaginate("events").listEvents({ sort: "+starts_at", when: "future", allLocations: true }).then(({ events }) => {
      this.mountedSetState({ events: events.map(event => new CHQEvent(event)), failure: false });
    }).catch(failure => {
      this.mountedSetState({ events: null, failure: true });
    });
  }

  public render(): React.ReactElement<IAppProps> {
    const { token, maxHeight } = this.props;
    const { events, failure } = this.state;

    if (!token || token.length !== 24) {
      return <TokenNotSet />;
    }

    if (failure) {
      return <Failure />;
    }

    if (events === null) {
      return (
        <section>
          <EventPlaceholder />
          <EventPlaceholder />
          <EventPlaceholder />
        </section>
      );
    }

    if (events.length === 0) {
      return <NoEvents />;
    }

    return <EventCardSet events={events} maxHeight={maxHeight} />;
  }
}
