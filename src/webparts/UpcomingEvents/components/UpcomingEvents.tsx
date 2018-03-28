import * as React from "react";

export interface IUpcomingEventsProps {
  token: string;
}

export default class UpcomingEvents extends React.Component<IUpcomingEventsProps, {}> {
  public render(): React.ReactElement<IUpcomingEventsProps> {
    return <p>Testing</p>;
  }
}
