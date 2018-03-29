/// <reference types="mocha" />
/// <reference types="sinon" />

import { assert } from "chai";

import formatTimestamp from "../lib/format-timestamp";

describe("formatTimestamp", () => {
  it("builds appropriate looking dates", () => {
    const date = new Date();
    const formatted = ;

    const pattern = new RegExp(`[A-Z][a-z]+ ${date.getDate()}, ${date.getFullYear()}`);
    assert.match(formatted, pattern);
  });
});
