import React from "react";
import { shallow } from "enzyme";

import Failure from "../src/components/Failure";

test("matches snapshot", () => {
  expect(shallow(<Failure />)).toMatchSnapshot();
});
