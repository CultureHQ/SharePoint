import React, { Fragment } from "react";

import formatTimestamp from "./format-timestamp";
import UserLink from "./UserLink";
import Cap from "./Cap";
import styles from "./styles";

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

const Metadata = ({
  cancelledAt, startsAt, endsAt, location, host, acceptedCount, cap
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
        {cap && <Cap acceptedCount={acceptedCount} cap={cap} />}
      </dl>
    </div>
  );
};

export default Metadata;
