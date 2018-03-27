import React from "react";

import styles from "../styles";

import EventFooter from "./EventFooter";
import EventHeader from "./EventHeader";

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
