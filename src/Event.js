import React, { Fragment } from "react";

import styles from "./styles";

const PLATFORM_ROOT = "https://platform.culturehq.com";
const PREVIEW_LIMIT = 5;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const formatTimestamp = timestamp => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  hours = hours > 12 ? hours - 12 : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const meridian = hours >= 12 ? "PM" : "AM";

  return `${month} ${day}, ${year}, ${hours}:${minutes} ${meridian}`;
}

const UserLink = ({ user: { id, active }, children, ...props }) => {
  if (active) {
    return <a href={`${PLATFORM_ROOT}/people/${id}`} {...props}>{children}</a>;
  }
  return <span {...props}>{children}</span>;
}

const Points = ({ sponsored, survey }) => {
  const points = survey && survey.points || 0;

  if (sponsored) {
    const ribbon = points > 0 ? `+${points} points` : "Sponsored";
    return (
      <span className={styles.ribbon}>
        <span className={styles.ribbonText}>{ribbon}</span>
      </span>
    );
  }

  if (points > 0) {
    return <span>+{points} Points</span>;
  }

  return null;
};

const RSVPPreview = ({ rsvp: { user } }) => (
  <UserLink
    user={user}
    className={styles.thumbnail}
    style={{ backgroundImage: `url(${user.avatar.thumbUrl})` }}
  />
);

const RSVPsPreview = ({ acceptedCount, rsvpPreview }) => {
  if (!rsvpPreview || rsvpPreview.length < 1) {
    return null;
  }

  const extra = acceptedCount - Math.min(PREVIEW_LIMIT, rsvpPreview.length);

  return (
    <span className={styles.rsvpPreview}>
      <span>Who&#39;s coming: </span>
      {rsvpPreview.slice(0, PREVIEW_LIMIT).map(rsvp => (
        <RSVPPreview rsvp={rsvp} key={rsvp.id} />
      ))}
      {extra > 0 && <span>+{extra}</span>}
    </span>
  );
};

const Cap = ({ acceptedCount, cap }) => {
  const remaining = cap - acceptedCount;
  let message;

  if (remaining < 1) {
    message = "No spots remaining";
  } else {
    message = `${remaining} spot${remaining === 1 ? "" : "s"} remaining`;
  }

  return (
    <Fragment>
      <dt>Spots:</dt>
      <dd>{message}</dd>
    </Fragment>
  );
};

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
