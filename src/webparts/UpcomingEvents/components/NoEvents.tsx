import * as React from "react";

import styles from "../styles.module.scss";

const NoEvents = () => (
  <div className={styles.warning}>
    <strong>Uh oh!</strong> No events to show.{" "}
    <a href="https://platform.culturehq.com/events/create">Click here</a>{" "}
    to create an event.
  </div>
);

export default NoEvents;
