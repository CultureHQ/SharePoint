import React from "react";

import styles from "../styles.css";

import EventImage from "./EventImage";
import EventMetadata from "./EventMetadata";
import Rsvps from "./Rsvps";

const Event = ({ event }) => (
  <div className={styles.event}>
    <div className={styles.eventHeader}>
      <EventImage event={event} />
      <EventMetadata event={event} />
    </div>
    <div className={styles.eventFooter}>
      <a className={styles.moreInfo} href={event.href}>More Info</a>
      <Rsvps event={event} />
    </div>
  </div>
);

export default Event;
