import React from "react";

import styles from "../styles";

import EventFooter from "./EventFooter";
import EventHeader from "./EventHeader";

const Event = ({ event }) => (
  <div className={styles.event}>
    <EventHeader event={event} />
    <EventFooter event={event} />
  </div>
);

export default Event;
