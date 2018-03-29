import * as React from "react";
import * as ReactDOM from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "UpcomingEventsWebPartStrings";
import App, { IAppProps } from "./components/App";

export interface IUpcomingEventsWebPartProps {
  token: string;
}

export default class UpcomingEventsWebPart extends BaseClientSideWebPart<IUpcomingEventsWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IAppProps> = React.createElement(App, {
      token: this.properties.token
    });

    ReactDOM.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [{
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [{
          groupFields: [
            PropertyPaneTextField("token", {
              label: strings.TokenFieldLabel,
              placeholder: "Your token here"
            })
          ]
        }]
      }]
    };
  }
}
