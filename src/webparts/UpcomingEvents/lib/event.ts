import { PLATFORM_ROOT, PREVIEW_LIMIT } from "../config";

import formatTimestamp from "./format-timestamp";

const DAY_IN_MILLISECONDS = 86400000;

export interface IUserAvatar {
  thumbUrl: string;
}

export interface IRsvp {
  id: number;
  user: IUser;
}

export interface IUser {
  id: number;
  name: string;
  active: boolean;
  avatar: IUserAvatar;
}

export interface IEventImage {
  mediumUrl: string;
}

export interface IEvent {
  id: number;
  name: string;
  startsAt: string;
  endsAt: string;
  sponsored: boolean;
  location: string;
  cap: number;
  acceptedCount: number;
  cancelledAt: string;
  host: IUser;
  rsvpPreview: IRsvp[];
  image: IEventImage;
}

export interface ICHQEvent extends IEvent {
  imageUrl: string;
  href: string;
  isLive: boolean;
  startsAtDisplay: string;
  endsAtDisplay: string;
  remainingSpots: string;
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

  get name(): string {
    return this.event.name;
  }

  get startsAt(): string {
    return this.event.startsAt;
  }

  get endsAt(): string {
    return this.event.endsAt;
  }

  get sponsored(): boolean {
    return this.event.sponsored;
  }

  get location(): string {
    return this.event.location;
  }

  get cap(): number {
    return this.event.cap;
  }

  get acceptedCount(): number {
    return this.event.acceptedCount;
  }

  get cancelledAt(): string {
    return this.event.cancelledAt;
  }

  get host(): IUser {
    return this.event.host;
  }

  get rsvpPreview(): IRsvp[] {
    return this.event.rsvpPreview;
  }

  get image(): IEventImage {
    return this.event.image;
  }

  get imageUrl(): string {
    return this.image.mediumUrl;
  }

  get href(): string {
    return `${PLATFORM_ROOT}/events/${this.event.id}`;
  }

  get isLive(): boolean {
    const currentDate = new Date();
    if (currentDate < new Date(this.event.startsAt)) {
      return false;
    }

    const firstDayEnd = new Date(this.event.startsAt).getTime() + DAY_IN_MILLISECONDS;
    return currentDate < new Date(firstDayEnd);
  }

  get startsAtDisplay(): string {
    return formatTimestamp(this.event.startsAt);
  }

  get endsAtDisplay(): string {
    return formatTimestamp(this.event.endsAt);
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
}

export default CHQEvent;
