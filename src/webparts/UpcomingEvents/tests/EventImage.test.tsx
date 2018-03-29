/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import EventImage from "../components/EventImage";
import { buildEvent } from "./support";

describe("EventImage", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it("should display the ribbon when the event is sponsored", () => {
    const event = buildEvent({ sponsored: true });
    renderer.render(<EventImage event={event} />);

    const result = renderer.getRenderOutput();
    const sponsored = result.props.children.props.children[0];
    assert.notStrictEqual(sponsored, false);
  });

  it("should not display the ribbon when the event is not sponsored", () => {
    const event = buildEvent({ sponsored: false });
    renderer.render(<EventImage event={event} />);

    const result = renderer.getRenderOutput();
    const sponsored = result.props.children.props.children[0];
    assert.strictEqual(sponsored, false);
  });

  it("should display the live banner when the event is live", () => {
    const event = buildEvent({
      startsAt: new Date().toString(),
      endsAt: new Date(new Date().getTime() + 86400000 * 2).toString()
    });
    renderer.render(<EventImage event={event} />);

    const result = renderer.getRenderOutput();
    const live = result.props.children.props.children[1];
    assert.notStrictEqual(live, false);
  });

  it("should not display the live banner when the event is not live", () => {
    const event = buildEvent({});
    renderer.render(<EventImage event={event} />);

    const result = renderer.getRenderOutput();
    const live = result.props.children.props.children[1];
    assert.strictEqual(live, false);
  });
});
