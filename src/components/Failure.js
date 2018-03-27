import React from "react";

import styles from "../styles";

const Failure = () => (
  <div className={styles.failure}>
    <strong>Oh no!</strong> We failed to fetch the events from CultureHQ. Please
    refresh to try again. If this continues to happen, please contact{" "}
    <a href="mailto:support@culturehq.com">support@culturehq.com</a>.
  </div>
);

export default Failure;
