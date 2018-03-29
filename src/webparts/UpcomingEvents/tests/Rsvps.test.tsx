/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import Rsvps from "../components/Rsvps";
import CHQEvent, { IUser, IRsvp, ICHQEvent } from "../lib/event";
import { buildRsvp, buildEvent } from "./support";

describe("Rsvps", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it("should render nothing wehn there are no rsvps", () => {
    const rsvpPreview = [];
    renderer.render(<Rsvps event={buildEvent({ rsvpPreview })} />);

    const result = renderer.getRenderOutput();
    assert.strictEqual(result, null);
  });

  it("should display a list of rsvps for each one given", () => {
    const rsvpPreview = [buildRsvp({ id: 1 }), buildRsvp({ id: 2 }), buildRsvp({ id: 3 })];
    renderer.render(<Rsvps event={buildEvent({ rsvpPreview })} />);

    const result = renderer.getRenderOutput();
    const rsvpContainer = result.props.children[1];
    assert.strictEqual(rsvpContainer.props.children.length, rsvpPreview.length);
  });

  it("should display extra when there are more than the display cap", () => {
    const rsvpPreview = [];
    for (let id = 1; id <= 7; id += 1) {
      rsvpPreview.push(buildRsvp({ id }));
    }

    const event = buildEvent({ rsvpPreview });
    renderer.render(<Rsvps event={event} />);

    const result = renderer.getRenderOutput();
    assert.strictEqual(result.props.children.length, 3);
    assert.strictEqual(result.props.children[2].props.children[1], 2);
  });
});
