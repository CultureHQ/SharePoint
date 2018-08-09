import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

import UserLink from "./UserLink";

const EventTimestamps = ({ startsAt, endsAt }) => [
  <dt key="start-key">Starts:</dt>,
  <dd key="start-val">{startsAt}</dd>,
  <dt key="end-key">Ends:</dt>,
  <dd key="end-val">{endsAt}</dd>
];

const EventCancelled = () => [
  <dt key="stat-key">Status:</dt>,
  <dd key="stat-end">Cancelled</dd>
];

const EventCap = ({ remainingSpots }) => [
  <dt key="spots-key">Spots:</dt>,
  <dd key="spots-end">{remainingSpots}</dd>
];

const EventLocation = ({ location }) => [
  <dt key="where-key">Where:</dt>,
  <dd key="where-end">{location}</dd>
];

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
            <EventCancelled key="cancelled" /> :
            <EventTimestamps key="timestamps" startsAt={event.startsAtDisplay} endsAt={event.endsAtDisplay} />
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
