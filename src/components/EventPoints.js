import React from "react";

import styles from "../styles";

const EventPoints = ({ sponsored, survey }) => {
  const points = (survey && survey.points) || 0;

  if (sponsored) {
    const ribbon = points > 0 ? `+${points} points` : "Sponsored";
    return (
      <span className={styles.ribbon}>
        <span className={styles.ribbonText}>{ribbon}</span>
      </span>
    );
  }

  if (points > 0) {
    return <span>+{points} Points</span>;
  }

  return null;
};

export default EventPoints;
