import { PLATFORM_ROOT, PREVIEW_LIMIT } from "../config";

import formatTimestamp from "./format-timestamp";

const DAY_IN_MILLISECONDS = 86400000;

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
  departments: IDepartment[];
  interests: IInterest[];
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

export interface ICHQEvent extends IEvent {
  imageUrl: string;
  href: string;
  isLive: boolean;
  startsAtDisplay: string;
  endsAtDisplay: string;
  remainingSpots: number;
  rsvps: IRsvp[];
  rsvpExtra: number;
}

class CHQEvent {
  private event: IEvent;

  constructor(event: IEvent) {
    this.event = event;
  }

  get id(): number {
    return this.event.id;
  }

  get startsAt(): string {
    return this.event.startsAt;
  }

  get endsAt(): string {
    return this.event.endsAt;
  }

  get cap(): number {
    return this.event.cap;
  }

  get acceptedCount(): number {
    return this.event.acceptedCount;
  }

  get rsvpPreview(): IRsvp[] {
    return this.event.rsvpPreview;
  }

  get sponsored(): boolean {
    return this.event.sponsored;
  }

  get name(): string {
    return this.event.name;
  }

  get host(): IUser {
    return this.event.host;
  }

  get cancelledAt(): string {
    return this.event.cancelledAt;
  }

  get endsAtDisplay(): string {
    return formatTimestamp(this.event.endsAt);
  }

  get href(): string {
    return `${PLATFORM_ROOT}/events/${this.event.id}`;
  }

  get imageUrl(): string {
    return this.event.image.mediumUrl;
  }

  get isLive(): boolean {
    const currentDate = new Date();
    if (currentDate < new Date(this.event.startsAt)) {
      return false;
    }

    const firstDayEnd = new Date(this.event.startsAt).getTime() + DAY_IN_MILLISECONDS;
    return currentDate < new Date(firstDayEnd);
  }

  get remainingSpots(): string {
    const remaining = this.event.cap - this.event.acceptedCount;

    if (remaining < 1) {
      return "No spots remaining";
    }
    return `${remaining} spot${remaining === 1 ? "" : "s"} remaining`;
  }

  get rsvps(): IRsvp[] {
    return this.event.rsvpPreview.slice(0, PREVIEW_LIMIT);
  }

  get rsvpExtra(): number {
    const displayedRsvps = Math.min(PREVIEW_LIMIT, this.event.rsvpPreview.length);
    return this.event.acceptedCount - displayedRsvps;
  }

  get startsAtDisplay(): string {
    return formatTimestamp(this.event.startsAt);
  }
}

export default CHQEvent;
