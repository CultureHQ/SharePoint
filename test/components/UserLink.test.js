import React from "react";
import { shallow } from "enzyme";

import UserLink from "../../src/components/UserLink";

test("with active user", () => {
  const user = { id: 1, active: true };
  const component = shallow(<UserLink user={user} foo="bar" />);

  const anchor = component.find("a");
  expect(anchor.length).toEqual(1);
  expect(anchor.prop("foo")).toEqual("bar");
});

test("with inactive user", () => {
  const user = { id: 1, active: false };
  const component = shallow(<UserLink user={user} foo="bar" />);

  const span = component.find("span");
  expect(span.length).toEqual(1);
  expect(span.prop("foo")).toEqual("bar");
});
