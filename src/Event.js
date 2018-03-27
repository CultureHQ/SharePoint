import React, { Fragment } from "react";

import formatTimestamp from "./format-timestamp";
import styles from "./styles";

import Cap from "./Cap";
import Metadata from "./Metadata";
import Points from "./Points";
import RSVPsPreview from "./RSVPsPreview";
import UserLink from "./UserLink";

import { PLATFORM_ROOT, PREVIEW_LIMIT } from "./config";

const Event = ({
  event: {
    id,
    name,
    image: { mediumUrl },
    sponsored,
    survey,
    cancelledAt,
    acceptedCount,
    rsvpPreview,
    startsAt,
    endsAt,
    host,
    location,
    cap
  }
}) => {
  const eventUrl = `${PLATFORM_ROOT}/events/${id}`;

  return (
    <div className={styles.event}>
      <div className={styles.eventHeader}>
        <div className={styles.eventLeft}>
          <a style={{ backgroundImage: `url(${mediumUrl})` }} href={eventUrl}>
            <Points sponsored={sponsored} survey={survey} />
            <span className={styles.eventName}>{name}</span>
          </a>
        </div>
        <Metadata
          cancelledAt={cancelledAt}
          startsAt={startsAt}
          endsAt={endsAt}
          location={location}
          host={host}
          acceptedCount={acceptedCount}
          cap={cap}
        />
      </div>
      <div className={styles.eventFooter}>
        <a className={styles.moreInfo} href={eventUrl}>More Info</a>
        <RSVPsPreview acceptedCount={acceptedCount} rsvpPreview={rsvpPreview} />
      </div>
    </div>
  );
};

export default Event;
