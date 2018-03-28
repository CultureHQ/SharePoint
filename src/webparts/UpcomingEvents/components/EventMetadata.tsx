import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

import UserLink from "./UserLink";

const EventTimestamps = ({ startsAt, endsAt }) => (
  <section>
    <dt>Starts:</dt>
    <dd>{startsAt}</dd>
    <dt>Ends:</dt>
    <dd>{endsAt}</dd>
  </section>
);

const EventCancelled = () => (
  <section>
    <dt>Status:</dt>
    <dd>Cancelled</dd>
  </section>
);

const EventCap = ({ remainingSpots }) => (
  <section>
    <dt>Spots:</dt>
    <dd>{remainingSpots}</dd>
  </section>
);

const EventLocation = ({ location }) => (
  <section>
    <dt>Where:</dt>
    <dd>{location}</dd>
  </section>
);

export interface IEventMetadataProps {
  event: ICHQEvent;
}

export default class EventMetadata extends React.Component<IEventMetadataProps, {}> {
  public render(): React.ReactElement<IEventMetadataProps> {
    const { event } = this.props;

    let containerClass = styles.eventRight;
    if (event.cancelledAt) {
      containerClass = `${containerClass} ${styles.eventRightCancelled}`;
    }

    return (
      <div className={containerClass}>
        <dl>
          {event.cancelledAt ?
            <EventCancelled /> :
            <EventTimestamps startsAt={event.startsAtDisplay} endsAt={event.endsAtDisplay} />
          }
          {event.location && <EventLocation location={event.location} />}
          <dt>Host:</dt>
          <dd><UserLink user={event.host}>{event.host.name}</UserLink></dd>
          {event.cap && <EventCap remainingSpots={event.remainingSpots} />}
        </dl>
      </div>
    );
  }
}
