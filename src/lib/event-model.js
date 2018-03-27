import { PLATFORM_ROOT, PREVIEW_LIMIT } from "../config";

import formatTimestamp from "./format-timestamp";

const DAY_IN_MILLISECONDS = 86400000;

class EventModel {
  constructor(params) {
    const { hasOwnProperty } = Object.prototype;

    Object.keys(params).forEach(key => {
      if (hasOwnProperty.call(params, key)) {
        this[key] = params[key];
      }
    });
  }

  get endsAtDisplay() {
    return formatTimestamp(this.endsAt);
  }

  get href() {
    return `${PLATFORM_ROOT}/events/${this.id}`;
  }

  get imageUrl() {
    return this.image.mediumUrl;
  }

  get isLive() {
    const currentDate = new Date();
    if (currentDate < new Date(this.startsAt)) {
      return false;
    }

    const firstDayEnd = new Date(this.startsAt).getTime() + DAY_IN_MILLISECONDS;
    return currentDate < new Date(firstDayEnd);
  }

  get remainingSpots() {
    const remaining = this.cap - this.acceptedCount;

    if (remaining < 1) {
      return "No spots remaining";
    }
    return `${remaining} spot${remaining === 1 ? "" : "s"} remaining`;
  }

  get rsvps() {
    return this.rsvpPreview.slice(0, PREVIEW_LIMIT);
  }

  get rsvpExtra() {
    const displayedRsvps = Math.min(PREVIEW_LIMIT, this.rsvpPreview.length);
    return this.acceptedCount - displayedRsvps;
  }

  get startsAtDisplay() {
    return formatTimestamp(this.startsAt);
  }
}

export default EventModel;
