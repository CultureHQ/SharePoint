/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import UserLink from "../components/UserLink";
import { IUser } from "../lib/event";

describe("UserLink", () => {
  let renderer;

  const buildUser = (active: boolean): IUser => ({
    id: 1,
    name: "Kevin",
    active,
    avatar: {
      thumbUrl: "https://www.example.com/user.png"
    }
  });

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it("should render a link when the user is active", () => {
    const user = buildUser(true);
    renderer.render(<UserLink user={user} />);

    const result = renderer.getRenderOutput();
    assert.strictEqual(result.type, "a");
  });

  it("should render a span when the user is inactive", () => {
    const user = buildUser(false);
    renderer.render(<UserLink user={user} />);

    const result = renderer.getRenderOutput();
    assert.strictEqual(result.type, "span");
  });
});
