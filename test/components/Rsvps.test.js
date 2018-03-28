import React from "react";
import { shallow, mount } from "enzyme";

import Rsvps from "../../src/components/Rsvps";
import UserLink from "../../src/components/UserLink";

test("returns nothing when there are no rsvps", () => {
  const component = shallow(<Rsvps event={{ rsvps: [] }} />);

  expect(component.find("span").length).toEqual(0);
});

test("returns a list of rsvps for each one given", () => {
  const thumbUrl = "http://www.example.com/user.png";
  const rsvps = [
    { id: 1, user: { id: 1, active: true, avatar: { thumbUrl } } },
    { id: 2, user: { id: 2, active: true, avatar: { thumbUrl } } }
  ];

  const component = mount(<Rsvps event={{ rsvps }} />);
  expect(component.find(UserLink).length).toEqual(2);
});
