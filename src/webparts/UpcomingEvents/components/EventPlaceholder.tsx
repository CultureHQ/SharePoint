import * as React from "react";

import styles from "../styles.module.scss";

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
