import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

import EventCard from "./EventCard";

export interface IEventCardSetProps {
  events: ICHQEvent[];
  maxHeight?: number;
}

export default class EventCardSet extends React.Component<IEventCardSetProps, {}> {
  public render(): React.ReactElement<IEventCardSetProps> {
    const { events, maxHeight } = this.props;
    const style = { maxHeight: maxHeight ? `${maxHeight}px` : "none" };

    return (
      <div className={styles.eventList} style={style}>
        {events.map(event => <EventCard key={event.id} event={event} />)}
      </div>
    );
  }
}
