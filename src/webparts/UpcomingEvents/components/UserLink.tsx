import * as React from "react";

import { PLATFORM_ROOT } from "../config";
import { IUser } from "../lib/event";

export interface IUserLinkProps {
  user: IUser;
}

export default class UserLink extends React.Component<IUserLinkProps, {}> {
  public render(): React.ReactElement<IUserLinkProps> {
    const { user, children } = this.props;

    if (user.active) {
      return <a href={`${PLATFORM_ROOT}/people/${user.id}`}>{children}</a>;
    }
    return <span>{children}</span>;
  }
}
