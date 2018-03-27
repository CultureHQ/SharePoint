import { PLATFORM_ROOT, PREVIEW_LIMIT } from "../config";

class EventModel {
  constructor(params) {
    const { hasOwnProperty } = Object.prototype;

    Object.keys(params).forEach(key => {
      if (hasOwnProperty.call(params, key)) {
        this[key] = params[key];
      }
    });
  }

  get href() {
    return `${PLATFORM_ROOT}/events/${this.id}`;
  }

  get rsvps() {
    return this.rsvpPreview.slice(0, PREVIEW_LIMIT);
  }

  get rsvpExtra() {
    const displayedRsvps = Math.min(PREVIEW_LIMIT, this.rsvpPreview.length);
    return this.acceptedCount - displayedRsvps;
  }
}

export default EventModel;
