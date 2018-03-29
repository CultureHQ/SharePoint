/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import EventMetadata from "../components/EventMetadata";
import { buildEvent } from "./support";

describe("EventMetadata", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it("should display cancelled status if the event is cancelled", () => {
    const event = buildEvent({ cancelledAt: "2018-01-01" });
    renderer.render(<EventMetadata event={event} />);

    const result = renderer.getRenderOutput();
    const cancelled = result.props.children.props.children[0].key;
    assert.strictEqual(cancelled, "cancelled");
  });

  it("should display timestamps when the event is not cancelled", () => {
    const event = buildEvent({ cancelledAt: null });
    renderer.render(<EventMetadata event={event} />);

    const result = renderer.getRenderOutput();
    const timestamps = result.props.children.props.children[0].key;
    assert.strictEqual(timestamps, "timestamps");
  });

  it("should display location when location is present", () => {
    const event = buildEvent({ location: "CultureHQ Boston" });
    renderer.render(<EventMetadata event={event} />);

    const result = renderer.getRenderOutput();
    const location = result.props.children.props.children[1];
    assert.notStrictEqual(location, null);
  });

  it("should not display location when location is not present", () => {
    const event = buildEvent({ location: null });
    renderer.render(<EventMetadata event={event} />);

    const result = renderer.getRenderOutput();
    const location = result.props.children.props.children[1];
    assert.strictEqual(location, null);
  });

  it("should display remaining spots only when capped", () => {
    const event = buildEvent({ cap: 5 });
    renderer.render(<EventMetadata event={event} />);

    const result = renderer.getRenderOutput();
    const spots = result.props.children.props.children[4];
    assert.notStrictEqual(spots, null);
  });

  it("should not display remaining spots when not capped", () => {
    const event = buildEvent({ cap: null });
    renderer.render(<EventMetadata event={event} />);

    const result = renderer.getRenderOutput();
    const spots = result.props.children.props.children[4];
    assert.strictEqual(spots, null);
  });
});
