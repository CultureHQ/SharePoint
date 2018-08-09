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

const EventImage = ({ event: { imageUrl, href, sponsored, isLive, name } }) => (
  <div className={styles.eventLeft}>
    <a className={styles.eventLeftLink} style={{ backgroundImage: `url(${imageUrl})` }} href={href}>
      {sponsored && <SponsoredRibbon />}
      {isLive && <LiveBanner />}
      <span className={styles.eventName}>{name}</span>
    </a>
  </div>
);

export default EventImage;
