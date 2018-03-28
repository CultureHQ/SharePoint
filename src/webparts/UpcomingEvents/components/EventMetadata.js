import React, { Fragment } from "react";

import styles from "../styles.css";

import UserLink from "./UserLink";

const EventTimestamps = ({ startsAt, endsAt }) => (
  <Fragment>
    <dt>Starts:</dt>
    <dd>{startsAt}</dd>
    <dt>Ends:</dt>
    <dd>{endsAt}</dd>
  </Fragment>
);

const EventCancelled = () => (
  <Fragment>
    <dt>Status:</dt>
    <dd>Cancelled</dd>
  </Fragment>
);

const EventCap = ({ remainingSpots }) => (
  <Fragment>
    <dt>Spots:</dt>
    <dd>{remainingSpots}</dd>
  </Fragment>
);

const EventLocation = ({ location }) => (
  <Fragment>
    <dt>Where:</dt>
    <dd>{location}</dd>
  </Fragment>
);

const EventMetadata = ({
  event: {
    cancelledAt, startsAtDisplay, endsAtDisplay, location, host, cap,
    remainingSpots
  }
}) => {
  let containerClass = styles.eventRight;
  if (cancelledAt) {
    containerClass = `${containerClass} ${styles.eventRightCancelled}`;
  }

  return (
    <div className={containerClass}>
      <dl>
        {cancelledAt ?
          <EventCancelled /> :
          <EventTimestamps startsAt={startsAtDisplay} endsAt={endsAtDisplay} />
        }
        {location && <EventLocation location={location} />}
        <dt>Host:</dt>
        <dd><UserLink user={host}>{host.name}</UserLink></dd>
        {cap && <EventCap remainingSpots={remainingSpots} />}
      </dl>
    </div>
  );
};

export default EventMetadata;
