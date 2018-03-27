import React from "react";

import styles from "../styles";
import Points from "./Points";

const EventImage = ({
  event: {
    image: { mediumUrl }, sponsored, survey, name, href
  }
}) => (
  <div className={styles.eventLeft}>
    <a
      style={{ backgroundImage: `url(${mediumUrl})` }}
      href={href}
    >
      <Points sponsored={sponsored} survey={survey} />
      <span className={styles.eventName}>{name}</span>
    </a>
  </div>
);

export default EventImage;
