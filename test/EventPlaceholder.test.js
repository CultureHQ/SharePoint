import React from "react";
import { shallow } from "enzyme";

import EventPlaceholder from "../src/components/EventPlaceholder";

test("matches snapshot", () => {
  expect(shallow(<EventPlaceholder />)).toMatchSnapshot();
});
