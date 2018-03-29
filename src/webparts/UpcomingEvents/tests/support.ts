import CHQEvent, { IUser, IRsvp, ICHQEvent } from "../lib/event";

const { hasOwnProperty } = Object.prototype;

export interface IBuildUserAttrs {
  id?: number;
  active?: boolean;
}

export const buildUser = (attrs: IBuildUserAttrs): IUser => ({
  id: hasOwnProperty.call(attrs, "id") ? attrs.id : 1,
  name: "Kevin",
  active: hasOwnProperty.call(attrs, "active") ? attrs.active : true,
  avatar: {
    thumbUrl: "https://www.example.com/user.png"
  }
});

export interface IBuildRsvpAttrs {
  id: number;
}

export const buildRsvp = (attrs: IBuildRsvpAttrs): IRsvp => ({
  id: attrs.id,
  user: buildUser({ id: attrs.id })
});

export interface IBuildEventAttrs {
  rsvpPreview: IRsvp[];
}

export const buildEvent = (attrs: IBuildEventAttrs): ICHQEvent => (
  new CHQEvent({
    id: 1,
    name: "Test Event",
    startsAt: "2018-01-01",
    endsAt: "2018-01-02",
    sponsored: true,
    location: "CultureHQ Boston",
    cap: 5,
    acceptedCount: attrs.rsvpPreview.length,
    cancelledAt: null,
    host: buildUser({ id: 1 }),
    rsvpPreview: attrs.rsvpPreview,
    image: {
      mediumUrl: "https://www.example.com/event.png"
    }
  })
);
