/// <reference types="mocha" />
/// <reference types="sinon" />

import { assert } from "chai";

import { PREVIEW_LIMIT } from "../config";
import { buildEvent, buildRsvp } from "./support";

describe("CHQEvent", () => {
  it("handles endsAtDisplay", () => {
    const event = buildEvent({ endsAt: "Thu Mar 29 2018 16:34:50 GMT-0400 (EDT)" });

    assert.include(event.endsAtDisplay, "March 29, 2018");
  });

  it("handles href", () => {
    const event = buildEvent({ id: 5 });

    assert.include(event.href, "/events/5");
  });

  it("handles imageUrl", () => {
    const mediumUrl = "https://www.example.com/event.png";
    const event = buildEvent({ image: { mediumUrl } });

    assert.strictEqual(mediumUrl, event.imageUrl);
  });

  it("handles isLive before start date", () => {
    const startsAt = new Date(new Date().getTime() + 5000).toISOString();
    const event = buildEvent({ startsAt });

    assert.isFalse(event.isLive);
  });

  it("handles isLive after start date", () => {
    const startsAt = new Date(new Date().getTime() - 86400000 / 2).toISOString();
    const event = buildEvent({ startsAt });

    assert.isTrue(event.isLive);
  });

  it("handles remainingSpots when cap is hit", () => {
    const event = buildEvent({ cap: 5, acceptedCount: 5 });

    assert.notMatch(event.remainingSpots, new RegExp("\\d"));
  });

  it("handles remainingSpots when cap hasn't been hit", () => {
    const event = buildEvent({ cap: 5, acceptedCount: 3 });

    assert.include(event.remainingSpots, "spots ");
  });

  it("handles remainingSpots pluralization", () => {
    const event = buildEvent({ cap: 5, acceptedCount: 4 });

    assert.include(event.remainingSpots, "spot ");
  });

  it("handles rsvps when over the limit", () => {
    const rsvpPreview = [];
    for (let id = 1; id <= 10; id += 1) {
      rsvpPreview.push(buildRsvp({ id }));
    }
    const event = buildEvent({ rsvpPreview });

    assert.strictEqual(event.rsvps.length, PREVIEW_LIMIT);
  });

  it("handles rsvps when under the limit", () => {
    const rsvpPreview = [buildRsvp({ id: 1 }), buildRsvp({ id: 2 }), buildRsvp({ id: 3 })];
    const event = buildEvent({ rsvpPreview });

    assert.strictEqual(event.rsvps.length, rsvpPreview.length);
  });

  it("handles rsvpExtra", () => {
    const rsvpPreview = [buildRsvp({ id: 1 }), buildRsvp({ id: 2 }), buildRsvp({ id: 3 })];
    const event = buildEvent({ rsvpPreview, acceptedCount: 10 });

    assert.strictEqual(event.rsvpExtra, 7);
  });

  it("handles startsAtDisplay", () => {
    const event = buildEvent({ startsAt: "Thu Mar 29 2018 16:34:50 GMT-0400 (EDT)" });

    assert.include(event.startsAtDisplay, "March 29, 2018");
  });
});
