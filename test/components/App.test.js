import React from "react";
import { mount } from "enzyme";

import App from "../../src/components/App";
import Event from "../../src/components/Event";
import EventPlaceholder from "../../src/components/EventPlaceholder";
import Failure from "../../src/components/Failure";
import client from "../../src/lib/client";

jest.mock("../../src/lib/client", () => ({ autoPaginate: jest.fn() }));

test("loads events from the client and then renders them", async () => {
  client.autoPaginate.mockImplementation(() => {
    const user = {
      id: 1,
      name: "Kevin",
      avatar: { thumbUrl: "https://www.example.com/user.png" }
    };

    const event = {
      id: 1,
      image: { mediumUrl: "https://www.example.com/event.png" },
      host: { id: 1, name: "Kevin" },
      rsvpPreview: [
        { id: 1, user },
        { id: 2, user: Object.assign({}, user, { id: 2, name: "Jimmy" }) },
        { id: 3, user: Object.assign({}, user, { id: 3, name: "Brian" }) }
      ]
    };

    const events = [
      event,
      Object.assign({}, event, { id: 2 }),
      Object.assign({}, event, { id: 3 })
    ];

    return { listEvents: () => Promise.resolve({ events }) };
  });

  const component = mount(<App />);
  expect(component.find(EventPlaceholder).length).toEqual(3);

  await component.instance().componentDidMount();
  component.update();

  expect(component.find(Event).length).toEqual(3);
});

test("renders a failure if an error is returned from the client", async () => {
  client.autoPaginate.mockImplementation(() => ({
    listEvents: () => Promise.reject(new Error("foobar"))
  }));

  const component = mount(<App />);

  await component.instance().componentDidMount();
  component.update();

  expect(component.find(Failure).length).toEqual(1);
});

test("handles unmounting appropriately", () => {
  const component = mount(<App />);
  const instance = component.instance();

  component.unmount();
  expect(instance.componentIsMounted).toBe(false);
});
