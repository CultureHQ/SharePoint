import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

import UserLink from "./UserLink";

const Rsvp = ({ rsvp: { user } }) => (
  <UserLink user={user} backgroundImage={user.avatar.thumbUrl} />
);

export interface IRsvpsProps {
  event: ICHQEvent;
}

export default class Rsvps extends React.Component<IRsvpsProps, {}> {
  public render(): React.ReactElement<IRsvpsProps> {
    const { event } = this.props;

    if (event.rsvps.length < 1) {
      return null;
    }

    return (
      <span className={styles.rsvpPreview}>
        <span>Who&#39;s coming: </span>
        <span className={styles.rsvpPreviewList}>
          {event.rsvps.map(rsvp => (
            <Rsvp rsvp={rsvp} key={rsvp.id} />
          ))}
        </span>
        {event.rsvpExtra > 0 && <span>+{event.rsvpExtra}</span>}
      </span>
    );
  }
}
