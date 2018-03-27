import React from "react";

import styles from "../styles";
import Points from "./Points";

import { PLATFORM_ROOT } from "../config";

const EventImage = ({
  event: { id, image: { mediumUrl }, sponsored, survey, name }
}) => (
  <div className={styles.eventLeft}>
    <a
      style={{ backgroundImage: `url(${mediumUrl})` }}
      href={`${PLATFORM_ROOT}/events/${id}`}
    >
      <Points sponsored={sponsored} survey={survey} />
      <span className={styles.eventName}>{name}</span>
    </a>
  </div>
);

export default EventImage;
