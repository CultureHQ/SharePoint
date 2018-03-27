import React, { Fragment } from "react";

import styles from "../styles";

import Cap from "./Cap";
import EventFooter from "./EventFooter";
import EventHeader from "./EventHeader";
import EventImage from "./EventImage";
import Metadata from "./Metadata";
import Points from "./Points";
import RSVPsPreview from "./RSVPsPreview";
import UserLink from "./UserLink";

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
}) => (
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

export default Event;
