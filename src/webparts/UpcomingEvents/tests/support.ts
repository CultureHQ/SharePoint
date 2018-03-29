import CHQEvent, { IUser, IRsvp, IEventImage, ICHQEvent } from "../lib/event";

export interface IBuildUserAttrs {
  id?: number;
  active?: boolean;
}

export interface IBuildRsvpAttrs {
  id: number;
}

export interface IBuildEventAttrs {
  id?: number;
  rsvpPreview?: IRsvp[];
  acceptedCount?: number;
  sponsored?: boolean;
  startsAt?: string;
  endsAt?: string;
  cancelledAt?: string;
  location?: string;
  cap?: number;
  image?: IEventImage;
}

const { hasOwnProperty } = Object.prototype;
const attrOr = (attrs: IBuildUserAttrs | IBuildRsvpAttrs | IBuildEventAttrs, attr: string, defaultValue: any): any => {
  return hasOwnProperty.call(attrs, attr) ? attrs[attr] : defaultValue;
};

export const buildUser = (attrs: IBuildUserAttrs): IUser => ({
  id: attrOr(attrs, "id", 1),
  name: "Kevin",
  active: attrOr(attrs, "active", true),
  avatar: {
    thumbUrl: "https://www.example.com/user.png"
  }
});

export const buildRsvp = (attrs: IBuildRsvpAttrs): IRsvp => ({
  id: attrs.id,
  user: buildUser({ id: attrs.id })
});

export const buildEvent = (attrs: IBuildEventAttrs): ICHQEvent => {
  const rsvpPreview = attrOr(attrs, "rsvpPreview", []);

  return new CHQEvent({
    id: attrOr(attrs, "id", 1),
    name: "Test Event",
    startsAt: attrOr(attrs, "startsAt", "2018-01-01"),
    endsAt: attrOr(attrs, "endsAt", "2018-01-02"),
    sponsored: attrOr(attrs, "sponsored", true),
    location: attrOr(attrs, "location", "CultureHQ Boston"),
    cap: attrOr(attrs, "cap", 5),
    acceptedCount: attrOr(attrs, "acceptedCount", rsvpPreview.length),
    cancelledAt: attrOr(attrs, "cancelledAt", null),
    host: buildUser({ id: 1 }),
    rsvpPreview,
    image: attrOr(attrs, "image", { mediumUrl: "https://www.example.com/event.png" })
  });
};
