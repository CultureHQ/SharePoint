import "babel-polyfill";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import CultureHQ from "culturehq-client";

const client = new CultureHQ({ apiHost: "http://localhost:3000" });
client.setToken("foobar");

const Loading = () => <div>Loading...</div>;

const Failure = () => <div>Failure</div>;

const UserActivity = ({ userActivity }) => (
  JSON.stringify(userActivity)
);

const UserActivities = ({ userActivities }) => (
  <ul>
    {userActivities.map(userActivity => (
      <li key={userActivity.id}>
        <UserActivity userActivity={userActivity} />
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = { failure: null, userActivities: null };

  async componentDidMount() {
    this.componentIsMounted = true;

    try {
      const { userActivities } = await client.listUserActivities();

      if (this.componentIsMounted) {
        this.setState({ userActivities });
      }
    } catch (failure) {
      this.setState({ failure });
    }
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
  }

  render() {
    const { failure, userActivities } = this.state;

    if (userActivities === null) {
      return <Loading />;
    }
    if (failure) {
      return <Failure failure={failure} />;
    }
    return <UserActivities userActivities={userActivities} />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
