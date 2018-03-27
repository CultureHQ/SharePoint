import React from "react";

import { PLATFORM_ROOT } from "../config";
import styles from "../styles";

import Rsvps from "./Rsvps";

const EventFooter = ({ event: { id, acceptedCount, rsvpPreview } }) => (
  <div className={styles.eventFooter}>
    <a
      className={styles.moreInfo}
      href={`${PLATFORM_ROOT}/events/${id}`}
    >
      More Info
    </a>
    <Rsvps acceptedCount={acceptedCount} rsvpPreview={rsvpPreview} />
  </div>
);

export default EventFooter;
