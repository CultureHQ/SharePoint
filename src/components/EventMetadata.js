import React, { Fragment } from "react";

import formatTimestamp from "../lib/format-timestamp";
import styles from "../styles";

import UserLink from "./UserLink";

const EventTimestamps = ({ startsAt, endsAt }) => (
  <Fragment>
    <dt>Starts:</dt>
    <dd>{formatTimestamp(startsAt)}</dd>
    <dt>Ends:</dt>
    <dd>{formatTimestamp(endsAt)}</dd>
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
)

const EventMetadata = ({
  event: {
    cancelledAt, startsAt, endsAt, location, host, acceptedCount, cap, remainingSpots
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
          <EventTimestamps startsAt={startsAt} endsAt={endsAt} />
        }
        {location && (
          <Fragment>
            <dt>Where:</dt>
            <dd>{location}</dd>
          </Fragment>
        )}
        <dt>Host:</dt>
        <dd><UserLink user={host}>{host.name}</UserLink></dd>
        {cap && <EventCap remainingSpots={remainingSpots} />}
      </dl>
    </div>
  );
};

export default EventMetadata;
