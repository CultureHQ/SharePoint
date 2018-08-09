import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

import UserLink from "./UserLink";

// The rendering in this component is slightly stupid, especially in a React 16
// world, but because of dependency restrictions with the SharePoint Framework
// I can't use the latest React, so I can't return an array of elements or a
// Fragment. Because I can't return any of these and the styles are dependent on
// the `dl` being flat, I'm just checking things multiple times.
const EventMetadata = ({ event }) => {
  const { cancelledAt, cap, host, location } = event;

  let containerClass = styles.eventRight;
  if (cancelledAt) {
    containerClass = `${containerClass} ${styles.eventRightCancelled}`;
  }

  return (
    <div className={containerClass}>
      <dl>
        {cancelledAt && <dt>Status:</dt>}
        {cancelledAt && <dd>Cancelled</dd>}
        {!cancelledAt && <dt>Starts:</dt>}
        {!cancelledAt && <dd>{event.startsAtDisplay}</dd>}
        {!cancelledAt && <dt>Ends:</dt>}
        {!cancelledAt && <dd>{event.endsAtDisplay}</dd>}
        {location && <dt>Where:</dt>}
        {location && <dd>{location}</dd>}
        <dt>Host:</dt>
        <dd><UserLink user={host}>{host.name}</UserLink></dd>
        {cap && <dt>Spots:</dt>}
        {cap && <dd>{event.remainingSpots}</dd>}
      </dl>
    </div>
  );
};

export default EventMetadata;
