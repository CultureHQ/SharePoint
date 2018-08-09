import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

import EventImage from "./EventImage";
import EventMetadata from "./EventMetadata";
import Rsvps from "./Rsvps";

const EventCard = ({ event }) => (
  <div className={styles.event}>
    <div className={styles.eventHeader}>
      <EventImage event={event} />
      <EventMetadata event={event} />
    </div>
    <div className={styles.eventFooter}>
      <Rsvps event={event} />
      <a className={styles.moreInfo} href={event.href}>More Info</a>
    </div>
  </div>
);

export default EventCard;
