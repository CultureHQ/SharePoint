import React from "react";

import styles from "../styles.css";

const EventPlaceholder = () => (
  <div className={styles.event}>
    <div className={styles.eventHeader}>
      <div className={styles.eventLeft}>
        <span className={styles.eventLeftPlaceholder} />
      </div>
      <div className={styles.eventRight}>
        <div className={styles.eventRightPlaceholder} />
        <div className={styles.eventRightPlaceholder} />
        <div className={styles.eventRightPlaceholder} />
      </div>
    </div>
    <div className={styles.eventFooter} />
  </div>
);

export default EventPlaceholder;
