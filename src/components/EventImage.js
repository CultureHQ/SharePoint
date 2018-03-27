import React from "react";

import styles from "../styles";

const SponsoredRibbon = () => (
  <span className={styles.ribbon}>
    <span className={styles.ribbonText}>Sponsored</span>
  </span>
);

const EventImage = ({
  event: {
    imageUrl, sponsored, name, href
  }
}) => (
  <div className={styles.eventLeft}>
    <a
      style={{ backgroundImage: `url(${imageUrl})` }}
      href={href}
    >
      {sponsored && <SponsoredRibbon />}
      <span className={styles.eventName}>{name}</span>
    </a>
  </div>
);

export default EventImage;
