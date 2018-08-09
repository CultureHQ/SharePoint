import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

import UserLink from "./UserLink";

const Rsvp = ({ rsvp: { user } }) => (
  <UserLink user={user} backgroundImage={user.avatar.thumbUrl} />
);

const Rsvps = ({ event: { rsvps, rsvpExtra } }) => {
  if (rsvps.length < 1) {
    return null;
  }

  return (
    <span className={styles.rsvpPreview}>
      <span>Who&#39;s coming: </span>
      <span className={styles.rsvpPreviewList}>
        {rsvps.map(rsvp => (
          <Rsvp rsvp={rsvp} key={rsvp.id} />
        ))}
      </span>
      {rsvpExtra > 0 && <span>+{rsvpExtra}</span>}
    </span>
  );
};

export default Rsvps;
