import * as React from "react";

import client from "../lib/client";
import CHQEvent, { ICHQEvent } from "../lib/event";

import EventCard from "./EventCard";
import EventPlaceholder from "./EventPlaceholder";
import Failure from "./Failure";

export interface IAppProps {
  token: string;
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

    client.autoPaginate("events").listEvents({ sort: "+starts_at", when: "future" }).then(({ events }) => {
      this.mountedSetState({ events: events.map(event => new CHQEvent(event)) });
    }).catch(failure => {
      this.mountedSetState({ failure: true });
    });
  }

  public componentWillUnmount() {
    this.componentIsMounted = false;
  }

  private mountedSetState(newState) {
    if (this.componentIsMounted) {
      this.setState(newState);
    }
  }

  public render(): React.ReactElement<IAppProps> {
    const { events, failure } = this.state;

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

    return (
      <section>
        {events.map(event => <EventCard key={event.id} event={event} />)}
      </section>
    );
  }
}
