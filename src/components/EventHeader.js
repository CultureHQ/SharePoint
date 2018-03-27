import React from "react";

import styles from "../styles";
import EventImage from "./EventImage";
import Metadata from "./Metadata";

const EventHeader = ({
  mediumUrl, id, sponsored, survey, name, cancelledAt, startsAt, endsAt,
  location, host, acceptedCount, cap
}) => (
  <div className={styles.eventHeader}>
    <EventImage
      mediumUrl={mediumUrl}
      id={id}
      sponsored={sponsored}
      survey={survey}
      name={name}
    />
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
);

export default EventHeader;
