import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "UpcomingEventsWebPartStrings";
import UpcomingEvents from "./components/UpcomingEvents";
import { IUpcomingEventsProps } from "./components/UpcomingEvents";

export interface IUpcomingEventsWebPartProps {
  token: string;
}

export default class UpcomingEventsWebPart extends BaseClientSideWebPart<IUpcomingEventsWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IUpcomingEventsProps> = React.createElement(UpcomingEvents, {
      token: this.properties.token
    });

    ReactDom.render(element, this.domElement);
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
