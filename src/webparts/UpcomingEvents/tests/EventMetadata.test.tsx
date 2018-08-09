/// <reference types="mocha" />
/// <reference types="sinon" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { assert } from "chai";

import EventMetadata from "../components/EventMetadata";
import { buildEvent } from "./support";

interface IMetadataList {
  Status?: string;
  Starts?: string;
  Ends?: string;
  Where?: string;
  Host?: any;
  Spots?: string;
}

describe("EventMetadata", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  const getMetadataList = (event): IMetadataList => {
    renderer.render(<EventMetadata event={buildEvent(event)} />);
    const result = renderer.getRenderOutput();

    let { children } = result.props.children.props;
    children = children.filter(child => child).map(child => child.props.children);

    const metadata = {};
    for (let idx = 0; idx < children.length; idx += 2) {
      metadata[children[idx].slice(0, -1)] = children[idx + 1];
    }

    return metadata;
  };

  it("should display cancelled status if the event is cancelled", () => {
    const { Status } = getMetadataList({ cancelledAt: "2018-01-01" });

    assert.isDefined(Status);
  });

  it("should display timestamps when the event is not cancelled", () => {
    const { Starts, Ends } = getMetadataList({ cancelledAt: null });

    assert.isDefined(Starts);
    assert.isDefined(Ends);
  });

  it("should display location when location is present", () => {
    const event = { location: "CultureHQ Boston" };
    const { Where } = getMetadataList(event);

    assert.strictEqual(Where, event.location);
  });

  it("should not display location when location is not present", () => {
    const { Where } = getMetadataList({ location: null });

    assert.isUndefined(Where);
  });

  it("should display remaining spots only when capped", () => {
    const { Spots } = getMetadataList({ cap: 5 });

    assert.isDefined(Spots);
  });

  it("should not display remaining spots when not capped", () => {
    const { Spots } = getMetadataList({ cap: null });

    assert.isUndefined(Spots);
  });
});
