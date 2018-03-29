/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import UserLink from "../components/UserLink";
import { IUser } from "../lib/event";
import { buildUser } from "./support";

describe("UserLink", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it("should render a link when the user is active", () => {
    const user = buildUser({ active: true });
    renderer.render(<UserLink user={user} />);

    const result = renderer.getRenderOutput();
    assert.strictEqual(result.type, "a");
  });

  it("should render a span when the user is inactive", () => {
    const user = buildUser({ active: false });
    renderer.render(<UserLink user={user} />);

    const result = renderer.getRenderOutput();
    assert.strictEqual(result.type, "span");
  });
});
