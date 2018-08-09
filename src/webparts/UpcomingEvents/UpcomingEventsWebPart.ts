import * as React from "react";
import * as ReactDOM from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import App, { IAppProps } from "./components/App";

export interface IUpcomingEventsWebPartProps {
  token: string;
  maxHeight?: number;
}

export default class UpcomingEventsWebPart extends BaseClientSideWebPart<IUpcomingEventsWebPartProps> {
  public render(): void {
    const { token, maxHeight } = this.properties;
    const element: React.ReactElement<IAppProps> = React.createElement(App, { token, maxHeight });

    ReactDOM.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [{
        header: {
          description: "Your CultureHQ community's upcoming events"
        },
        groups: [{
          groupFields: [
            PropertyPaneTextField("token", {
              label: "Token",
              placeholder: "Your token here"
            }),
            PropertyPaneTextField("maxHeight", {
              label: "Max Height (px)",
              placeholder: "Max height of the WebPart in pixels"
            })
          ]
        }]
      }]
    };
  }
}
