import React from "react";
import { shallow } from "enzyme";

import Event from "../../src/components/Event";

test("matches snapshot", () => {
  const event = { href: "https://platform.culturehq.com/events/1" };
  expect(shallow(<Event event={event} />)).toMatchSnapshot();
});
