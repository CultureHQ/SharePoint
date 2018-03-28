import React, { Component, Fragment } from "react";

import EventModel from "../lib/event-model";
import client from "../lib/client";

import Event from "./Event";
import EventPlaceholder from "./EventPlaceholder";
import Failure from "./Failure";

const LIST_PARAMS = { sort: "+starts_at", when: "future" };

class App extends Component {
  state = { events: null, failure: null };

  componentDidMount() {
    this.componentIsMounted = true;

    const paginator = client.autoPaginate("events");

    return paginator.listEvents(LIST_PARAMS).then(({ events }) => {
      this.mountedSetState({
        events: events.map(event => new EventModel(event))
      });
    }).catch(failure => {
      this.mountedSetState({ failure });
    });
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
  }

  mountedSetState(newState) {
    if (this.componentIsMounted) {
      this.setState(newState);
    }
  }

  render() {
    const { events, failure } = this.state;

    if (failure) {
      return <Failure failure={failure} />;
    }

    if (events === null) {
      return (
        <Fragment>
          <EventPlaceholder />
          <EventPlaceholder />
          <EventPlaceholder />
        </Fragment>
      );
    }

    return (
      <Fragment>
        {events.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </Fragment>
    );
  }
}

export default App;
