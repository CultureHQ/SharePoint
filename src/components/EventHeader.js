import React from "react";

import styles from "../styles";

import EventImage from "./EventImage";
import EventMetadata from "./EventMetadata";

const EventHeader = ({ event }) => (
  <div className={styles.eventHeader}>
    <EventImage event={event} />
    <EventMetadata event={event} />
  </div>
);

export default EventHeader;
