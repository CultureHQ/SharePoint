import React, { Fragment } from "react";

import formatTimestamp from "./format-timestamp";
import styles from "./styles";

import Cap from "./Cap";
import Points from "./Points";
import RSVPsPreview from "./RSVPsPreview";
import UserLink from "./UserLink";

import { PLATFORM_ROOT, PREVIEW_LIMIT } from "./config";

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
  let rightColumnClass = styles.eventRight;

  if (cancelledAt) {
    rightColumnClass = `${rightColumnClass} ${styles.eventRightCancelled}`;
  }

  return (
    <div className={styles.event}>
      <div className={styles.eventHeader}>
        <div className={styles.eventLeft}>
          <a style={{ backgroundImage: `url(${mediumUrl})` }} href={eventUrl}>
            <Points sponsored={sponsored} survey={survey} />
            <span className={styles.eventName}>{name}</span>
          </a>
        </div>
        <div className={rightColumnClass}>
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
      </div>
      <div className={styles.eventFooter}>
        <a className={styles.moreInfo} href={eventUrl}>More Info</a>
        <RSVPsPreview acceptedCount={acceptedCount} rsvpPreview={rsvpPreview} />
      </div>
    </div>
  );
};

export default Event;
