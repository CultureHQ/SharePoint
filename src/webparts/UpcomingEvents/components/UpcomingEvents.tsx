import * as React from "react";

import client from "../lib/client";

import Event, { IEvent } from "./Event";
import EventPlaceholder from "./EventPlaceholder";
import Failure from "./Failure";

export interface IUpcomingEventsProps {
  token: string;
}

export interface IUpcomingEventsState {
  events: [IEvent];
  failure: boolean;
}

export default class UpcomingEvents extends React.Component<IUpcomingEventsProps, IUpcomingEventsState> {
  private componentIsMounted: boolean;

  constructor(props: IUpcomingEventsProps) {
    super(props);
    this.state = { events: null, failure: false };
  }

  public componentDidMount() {
    this.componentIsMounted = true;

    client.autoPaginate("events").listEvents({ sort: "+starts_at", when: "future" }).then(({ events }) => {
      this.mountedSetState({ events });
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

  public render(): React.ReactElement<IUpcomingEventsProps> {
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
        {events.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </section>
    );
  }
}
