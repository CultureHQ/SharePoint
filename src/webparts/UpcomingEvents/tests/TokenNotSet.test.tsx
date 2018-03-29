/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import TokenNotSet from "../components/TokenNotSet";

describe("TokenNotSet", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<TokenNotSet />);
  });

  it("should render without breaking", () => {
    const result = renderer.getRenderOutput();
    assert.strictEqual(result.type, "div");
  });
});
