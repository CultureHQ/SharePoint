import React from "react";

import styles from "../styles";

import EventPoints from "./EventPoints";

const EventImage = ({
  event: {
    imageUrl, sponsored, survey, name, href
  }
}) => (
  <div className={styles.eventLeft}>
    <a
      style={{ backgroundImage: `url(${imageUrl})` }}
      href={href}
    >
      <EventPoints sponsored={sponsored} survey={survey} />
      <span className={styles.eventName}>{name}</span>
    </a>
  </div>
);

export default EventImage;
