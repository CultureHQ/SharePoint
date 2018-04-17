import * as React from "react";

import styles from "../styles.module.scss";

const TokenNotSet = () => (
  <div className={styles.warning}>
    <strong>Token not set.</strong> To configure this WebPart, contact{" "}
    <a href="mailto:support@culturehq.com">support@culturehq.com</a> to receive
    a 24-character valid token with which to fetch events. Then, click the edit
    icon on the left of the box to open the configuration panel on the right of
    the page. Finally, enter the token, and the events will be fetched.
  </div>
);

export default TokenNotSet;
