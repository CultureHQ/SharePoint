import * as React from "react";

import styles from "../styles.module.scss";

export interface IInterest {
  id: number;
  name: string;
}

export interface IDepartment {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILocation {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOrganizationValue {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserAvatar {
  thumbUrl: string;
  mediumUrl: string;
  largeUrl: string;
  isDefault: boolean;
  updatedAt: string;
  originalUrl: string;
}

export interface IRsvp {
  id: number;
  responseType: string;
  rating: number;
  receiveNotifications: boolean;
  attended: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  inviter: IUser;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  culturehqAdmin: boolean;
  organizationAdmin: boolean;
  active: boolean;
  title: string;
  claimed: boolean;
  createdAt: string;
  updatedAt: string;
  points: number;
  departments: [IDepartment];
  interests: [IInterest];
  location: ILocation;
  avatar: IUserAvatar;
  tenureInDays: number;
}

export interface IEventImage {
  thumbUrl: string;
  mediumUrl: string;
  largeUrl: string;
  isDefault: boolean;
  updatedAt: string;
  originalUrl: string;
}

export interface IEvent {
  id: number;
  name: string;
  details: string;
  startsAt: string;
  endsAt: string;
  eventType: string;
  sponsored: boolean;
  createdAt: string;
  updatedAt: string;
  location: string;
  visibility: string;
  cap: number;
  inviteOnly: boolean;
  openInvites: boolean;
  acceptedCount: number;
  timezone: string;
  cancelledAt: string;
  commentCount: number;
  allLocations: boolean;
  host: IUser;
  organizationValues: [IOrganizationValue];
  locations: [ILocation];
  interests: [IInterest];
  rsvpPreview: [IRsvp];
  image: IEventImage;
  rsvpForUser: IRsvp;
}

export interface IEventProps {
  event: IEvent;
}

export default class Event extends React.Component<IEventProps, {}> {
  public render(): React.ReactElement<IEventProps> {
    return (
      <div className={styles.event}>
        <div className={styles.eventHeader}>

        </div>
        <div className={styles.eventFooter}>

        </div>
      </div>
    );
  }
}

// <a className={styles.moreInfo} href={event.href}>More Info</a>
// <EventImage event={event} />
// <EventMetadata event={event} />
// <Rsvps event={event} />
