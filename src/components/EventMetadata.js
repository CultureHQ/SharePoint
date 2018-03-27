import React, { Fragment } from "react";

import formatTimestamp from "../lib/format-timestamp";
import UserLink from "./UserLink";
import EventCap from "./EventCap";
import styles from "../styles";

const EventTimestamps = ({ startsAt, endsAt }) => (
  <Fragment>
    <dt>Starts:</dt>
    <dd>{formatTimestamp(startsAt)}</dd>
    <dt>Ends:</dt>
    <dd>{formatTimestamp(endsAt)}</dd>
  </Fragment>
);

const Cancelled = () => (
  <Fragment>
    <dt>Status:</dt>
    <dd>Cancelled</dd>
  </Fragment>
);

const EventMetadata = ({
  event: { cancelledAt, startsAt, endsAt, location, host, acceptedCount, cap }
}) => {
  let containerClass = styles.eventRight;
  if (cancelledAt) {
    containerClass = `${containerClass} ${styles.eventRightCancelled}`;
  }

  return (
    <div className={containerClass}>
      <dl>
        {cancelledAt ?
          <Cancelled /> :
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
        {cap && <EventCap acceptedCount={acceptedCount} cap={cap} />}
      </dl>
    </div>
  );
};

export default EventMetadata;
