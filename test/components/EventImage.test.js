import React from "react";
import { mount } from "enzyme";

import EventImage from "../../src/components/EventImage";

const EVENT = {
  isLive: true,
  imageUrl: "https://www.example.com/event.png",
  sponsored: true,
  name: "Test Event",
  href: "https://platform.culturehq.com/events/1"
};

test("only displays ribbon when the event is sponsored", () => {
  expect(EVENT.sponsored).toBe(true);
  const component = mount(<EventImage event={EVENT} />);

  expect(component.text()).toContain("Sponsored");
});

test("does not display ribbon when the event is not sponsored", () => {
  const event = Object.assign({}, EVENT, { sponsored: false });
  const component = mount(<EventImage event={event} />);

  expect(component.text()).not.toContain("Sponsored");
});

test("displays live banner when the event is live", () => {
  expect(EVENT.isLive).toBe(true);
  const component = mount(<EventImage event={EVENT} />);

  expect(component.text()).toContain("LIVE");
});

test("does not display live banner when the event is not live", () => {
  const event = Object.assign({}, EVENT, { isLive: false });
  const component = mount(<EventImage event={event} />);

  expect(component.text()).not.toContain("LIVE");
});
