import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

import EventImage from "./EventImage";

export interface IEventCardProps {
  event: ICHQEvent;
}

export default class EventCard extends React.Component<IEventCardProps, {}> {
  public render(): React.ReactElement<IEventCardProps> {
    const { event } = this.props;

    return (
      <div className={styles.event}>
        <div className={styles.eventHeader}>
          <EventImage event={event} />
        </div>
        <div className={styles.eventFooter}>

        </div>
      </div>
    );
  }
}

// <a className={styles.moreInfo} href={event.href}>More Info</a>
// <EventImage event={event} />
// <EventMetadata event={event} />
// <Rsvps event={event} />
