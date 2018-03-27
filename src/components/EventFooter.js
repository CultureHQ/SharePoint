import React from "react";

import styles from "../styles";
import RSVPsPreview from "./RSVPsPreview";

import { PLATFORM_ROOT } from "../lib/config";

const EventFooter = ({ id, acceptedCount, rsvpPreview }) => (
  <div className={styles.eventFooter}>
    <a
      className={styles.moreInfo}
      href={`${PLATFORM_ROOT}/events/${id}`}
    >More Info</a>
    <RSVPsPreview acceptedCount={acceptedCount} rsvpPreview={rsvpPreview} />
  </div>
);

export default EventFooter;
