import React from "react";
import { shallow, mount } from "enzyme";

import Rsvps from "../../src/components/Rsvps";
import UserLink from "../../src/components/UserLink";

const RSVP = {
  id: 1,
  user: {
    id: 1,
    active: true,
    avatar: { thumbUrl: "http://www.example.com/user.png" }
  }
};

test("returns nothing when there are no rsvps", () => {
  const component = shallow(<Rsvps event={{ rsvps: [] }} />);

  expect(component.find("span").length).toEqual(0);
});

test("returns a list of rsvps for each one given", () => {
  const rsvps = [
    RSVP,
    Object.assign({}, RSVP, { id: 2, user: { id: 2, ...RSVP.user } })
  ];

  const component = mount(<Rsvps event={{ rsvps }} />);
  expect(component.find(UserLink).length).toEqual(2);
});

test("displays extra when there are more than the display cap", () => {
  const event = { rsvps: [RSVP], rsvpExtra: 5 };
  const component = mount(<Rsvps event={event} />);

  expect(component.text()).toContain("+5");
});
