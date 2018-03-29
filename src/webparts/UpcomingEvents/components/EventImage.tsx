import * as React from "react";

import styles from "../styles.module.scss";
import { ICHQEvent } from "../lib/event";

const SponsoredRibbon = () => (
  <span className={styles.ribbon}>
    <span className={styles.ribbonText}>Sponsored</span>
  </span>
);

const LiveBanner = () => (
  <span className={styles.live}>
    <svg viewBox="0 0 1024 1024">
      <path d="M512 928c229.8 0 416-186.2 416-416s-186.2-416-416-416c-229.8 0-416 186.2-416 416s186.2 416 416 416z" />
    </svg>
    {" "}
    LIVE
  </span>
);

export interface IEventImageProps {
  event: ICHQEvent;
}

export default class EventImage extends React.Component<IEventImageProps, {}> {
  public render(): React.ReactElement<IEventImageProps> {
    const { event } = this.props;

    return (
      <div className={styles.eventLeft}>
        <a
          className={styles.eventLeftLink}
          style={{ backgroundImage: `url(${event.imageUrl})` }}
          href={event.href}
        >
          {event.sponsored && <SponsoredRibbon />}
          {event.isLive && <LiveBanner />}
          <span className={styles.eventName}>{event.name}</span>
        </a>
      </div>
    );
  }
}
