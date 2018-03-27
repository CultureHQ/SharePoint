import React from "react";

import { PREVIEW_LIMIT } from "../config";
import styles from "../styles";

import UserLink from "./UserLink";

const Rsvp = ({ rsvp: { user } }) => (
  <UserLink
    user={user}
    className={styles.thumbnail}
    style={{ backgroundImage: `url(${user.avatar.thumbUrl})` }}
  />
);

const Rsvps = ({ event: { acceptedCount, rsvpPreview } }) => {
  if (!rsvpPreview || rsvpPreview.length < 1) {
    return null;
  }

  const extra = acceptedCount - Math.min(PREVIEW_LIMIT, rsvpPreview.length);

  return (
    <span className={styles.rsvpPreview}>
      <span>Who&#39;s coming: </span>
      {rsvpPreview.slice(0, PREVIEW_LIMIT).map(rsvp => (
        <Rsvp rsvp={rsvp} key={rsvp.id} />
      ))}
      {extra > 0 && <span>+{extra}</span>}
    </span>
  );
};

export default Rsvps;
