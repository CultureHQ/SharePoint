import React, { Component, Fragment } from "react";
import CultureHQ from "culturehq-client";

import EventModel from "../lib/event-model";
import Event from "./Event";

const client = new CultureHQ({ apiHost: "http://localhost:3000" });
client.setToken("test-token");

const Loading = () => <div>Loading...</div>;

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

      if (this.componentIsMounted) {
        this.setState({ events: events.map(event => new EventModel(event)) });
      }
    } catch (failure) {
      this.setState({ failure });
    }
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
  }

  render() {
    const { events, failure } = this.state;

    if (events === null) {
      return <Loading />;
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
