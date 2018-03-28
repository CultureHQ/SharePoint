import React from "react";

import styles from "../styles.css";

import UserLink from "./UserLink";

const Rsvp = ({ rsvp: { user } }) => (
  <UserLink
    user={user}
    className={styles.thumbnail}
    style={{ backgroundImage: `url(${user.avatar.thumbUrl})` }}
  />
);

const Rsvps = ({ event: { rsvps, rsvpExtra } }) => {
  if (rsvps.length < 1) {
    return null;
  }

  return (
    <span className={styles.rsvpPreview}>
      <span>Who&#39;s coming: </span>
      {rsvps.map(rsvp => (
        <Rsvp rsvp={rsvp} key={rsvp.id} />
      ))}
      {rsvpExtra > 0 && <span>+{rsvpExtra}</span>}
    </span>
  );
};

export default Rsvps;
