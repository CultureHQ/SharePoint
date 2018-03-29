/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import Failure from "../components/Failure";

describe("Failure", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<Failure />);
  });

  it("should render without breaking", () => {
    const result = renderer.getRenderOutput();
    assert.strictEqual(result.type, "div");
  });
});
