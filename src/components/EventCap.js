import React, { Fragment } from "react";

const EventCap = ({ acceptedCount, cap }) => {
  const remaining = cap - acceptedCount;
  let message;

  if (remaining < 1) {
    message = "No spots remaining";
  } else {
    message = `${remaining} spot${remaining === 1 ? "" : "s"} remaining`;
  }

  return (
    <Fragment>
      <dt>Spots:</dt>
      <dd>{message}</dd>
    </Fragment>
  );
};

export default EventCap;
