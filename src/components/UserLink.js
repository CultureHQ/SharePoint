import React from "react";

import { PLATFORM_ROOT } from "../config";

const UserLink = ({ user: { id, active }, children, ...props }) => {
  if (active) {
    return <a href={`${PLATFORM_ROOT}/people/${id}`} {...props}>{children}</a>;
  }
  return <span {...props}>{children}</span>;
}

export default UserLink;
