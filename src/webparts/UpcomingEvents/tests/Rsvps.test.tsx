/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import Rsvps from "../components/Rsvps";
import CHQEvent, { IUser, IRsvp, ICHQEvent } from "../lib/event";

describe("Rsvps", () => {
  let renderer;

  const buildUser = (id: number): IUser => ({
    id,
    name: "Kevin",
    active: true,
    avatar: {
      thumbUrl: "http://www.example.com/user.png"
    }
  });

  const buildRsvp = (id: number): IRsvp => ({ id, user: buildUser(id) });

  const buildEvent = (rsvpPreview: IRsvp[]): ICHQEvent => (
    new CHQEvent({
      id: 1,
      name: "Test Event",
      startsAt: "2018-01-01",
      endsAt: "2018-01-02",
      sponsored: true,
      location: "CultureHQ Boston",
      cap: 5,
      acceptedCount: rsvpPreview.length,
      cancelledAt: null,
      host: buildUser(1),
      rsvpPreview,
      image: {
        mediumUrl: "https://www.example.com/event.png"
      }
    })
  );

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it("should render nothing wehn there are no rsvps", () => {
    const rsvps = [];
    renderer.render(<Rsvps event={buildEvent(rsvps)} />);

    const result = renderer.getRenderOutput();
    assert.strictEqual(result, null);
  });

  it("should display a list of rsvps for each one given", () => {
    const rsvps = [buildRsvp(1), buildRsvp(2), buildRsvp(3)];
    renderer.render(<Rsvps event={buildEvent(rsvps)} />);

    const result = renderer.getRenderOutput();
    const rsvpContainer = result.props.children[1];
    assert.strictEqual(rsvpContainer.props.children.length, rsvps.length);
  });

  it("should display extra when there are more than the display cap", () => {
    const rsvps = [];
    for (let id = 1; id <= 7; id += 1) {
      rsvps.push(buildRsvp(id));
    }

    const event = buildEvent(rsvps);
    renderer.render(<Rsvps event={event} />);

    const result = renderer.getRenderOutput();
    assert.strictEqual(result.props.children.length, 3);
    assert.strictEqual(result.props.children[2].props.children[1], 2);
  });
});
