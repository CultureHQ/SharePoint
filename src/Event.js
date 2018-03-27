import React, { Fragment } from "react";

import formatTimestamp from "./format-timestamp";
import styles from "./styles";

import Cap from "./Cap";
import EventFooter from "./EventFooter";
import EventHeader from "./EventHeader";
import EventImage from "./EventImage";
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
      <EventHeader
        mediumUrl={mediumUrl}
        id={id}
        sponsored={sponsored}
        survey={survey}
        name={name}
        cancelledAt={cancelledAt}
        startsAt={startsAt}
        endsAt={endsAt}
        location={location}
        host={host}
        acceptedCount={acceptedCount}
        cap={cap}
      />
      <EventFooter
        id={id}
        acceptedCount={acceptedCount}
        rsvpPreview={rsvpPreview}
      />
    </div>
  );
};

export default Event;
