import * as React from "react";

import { PLATFORM_ROOT } from "../config";
import { IUser } from "../lib/event";

export interface IUserLinkProps {
  user: IUser;
  backgroundImage?: string;
}

export default class UserLink extends React.Component<IUserLinkProps, {}> {
  public render(): React.ReactElement<IUserLinkProps> {
    const { user, backgroundImage, children } = this.props;
    const style = {};

    if (backgroundImage) {
      style["backgroundImage"] = `url(${backgroundImage})`;
    }

    if (user.active) {
      return <a href={`${PLATFORM_ROOT}/people/${user.id}`} style={style}>{children}</a>;
    }
    return <span style={style}>{children}</span>;
  }
}
