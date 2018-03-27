import { PLATFORM_ROOT } from "../config";

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
}

export default EventModel;
