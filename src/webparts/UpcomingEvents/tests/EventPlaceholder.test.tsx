/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import EventPlaceholder from "../components/EventPlaceholder";

describe("EventPlaceholder", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<EventPlaceholder />);
  });

  it("should render without breaking", () => {
    const result = renderer.getRenderOutput();
    assert.strictEqual(result.type, "div");
  });
});
