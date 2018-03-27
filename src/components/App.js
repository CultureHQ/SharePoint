import React, { Component, Fragment } from "react";
import CultureHQ from "culturehq-client";

import { API_ROOT } from "../config";
import EventModel from "../lib/event-model";

import Event from "./Event";
import EventPlaceholder from "./EventPlaceholder";

const client = new CultureHQ({ apiHost: API_ROOT });
client.setToken("test-token");

const Failure = () => <div>Failure</div>;

class App extends Component {
  state = { events: null, failure: null };

  async componentDidMount() {
    this.componentIsMounted = true;

    try {
      const { events } = await client.listEvents({
        sort: "+starts_at",
        when: "future"
      });

      this.mountedSetState({
        events: events.map(event => new EventModel(event))
      });
    } catch (failure) {
      this.mountedSetState({ failure });
    }
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

    if (events === null) {
      return (
        <Fragment>
          <EventPlaceholder />
          <EventPlaceholder />
          <EventPlaceholder />
        </Fragment>
      );
    }

    if (failure) {
      return <Failure failure={failure} />;
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
