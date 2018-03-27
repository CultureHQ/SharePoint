import React from "react";

import styles from "../styles";

import EventFooter from "./EventFooter";
import EventImage from "./EventImage";
import EventMetadata from "./EventMetadata";

const Event = ({ event }) => (
  <div className={styles.event}>
    <div className={styles.eventHeader}>
      <EventImage event={event} />
      <EventMetadata event={event} />
    </div>
    <EventFooter event={event} />
  </div>
);

export default Event;
