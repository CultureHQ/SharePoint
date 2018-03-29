/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import EventCard from "../components/EventCard";
import { buildEvent } from "./support";

describe("EventCard", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<EventCard event={buildEvent({})} />);
  });

  it("should render without breaking", () => {
    const result = renderer.getRenderOutput();
    assert.strictEqual(result.type, "div");
  });
});
