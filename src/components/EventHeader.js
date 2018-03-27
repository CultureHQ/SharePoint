import React from "react";

import styles from "../styles";

import EventImage from "./EventImage";
import Metadata from "./Metadata";

const EventHeader = ({ event }) => (
  <div className={styles.eventHeader}>
    <EventImage event={event} />
    <Metadata event={event} />
  </div>
);

export default EventHeader;
