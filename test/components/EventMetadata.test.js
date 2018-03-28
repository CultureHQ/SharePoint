import React from "react";
import { mount } from "enzyme";

import EventMetadata from "../../src/components/EventMetadata";

const EVENT = {
  cancelledAt: "2017-12-31",
  startsAtDisplay: "2018-01-01",
  endsAtDisplay: "2018-01-02",
  location: "CultureHQ Boston",
  host: {
    id: 1,
    name: "Kevin",
    active: true
  },
  cap: 5,
  remainingSpots: 2
};

const hasHeading = heading => (
  node => node.type() === "dl" && node.text().includes(`${heading}:`)
);

test("displays cancelled status if the event is cancelled", () => {
  expect(EVENT.cancelledAt).not.toBe(null);
  const component = mount(<EventMetadata event={EVENT} />);

  expect(component.findWhere(hasHeading("Status")).length).toEqual(1);
});

test("displays timestamps when the event is not cancelled", () => {
  const event = Object.assign(EVENT, { cancelledAt: null });
  const component = mount(<EventMetadata event={event} />);

  expect(component.findWhere(hasHeading("Starts")).length).toEqual(1);
});

test("displays location only when location is present", () => {
  expect(EVENT.location).not.toBe(null);
  const component = mount(<EventMetadata event={EVENT} />);

  expect(component.findWhere(hasHeading("Where")).length).toEqual(1);
});

test("does not display location when it is not present", () => {
  const event = Object.assign(EVENT, { location: null });
  const component = mount(<EventMetadata event={event} />);

  expect(component.findWhere(hasHeading("Where")).length).toEqual(0);
});

test("displays remaining spots only when capped", () => {
  expect(EVENT.cap).not.toBe(null);
  const component = mount(<EventMetadata event={EVENT} />);

  expect(component.findWhere(hasHeading("Spots")).length).toEqual(1);
});

test("does not display spots when not capped", () => {
  const event = Object.assign(EVENT, { cap: null });
  const component = mount(<EventMetadata event={event} />);

  expect(component.findWhere(hasHeading("Spots")).length).toEqual(0);
});
