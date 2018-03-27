import EventModel from "../src/lib/event-model";
import { PREVIEW_LIMIT } from "../src/config";

const datePatternFrom = date => (
  new RegExp(`[A-Z][a-z]+ ${date.getDate()}, ${date.getFullYear()}`)
);

test("endsAtDisplay", () => {
  const endsAt = new Date();
  const event = new EventModel({ endsAt });

  expect(event.endsAtDisplay).toMatch(datePatternFrom(endsAt));
});

test("href", () => {
  const id = 5;
  const event = new EventModel({ id });

  expect(event.href).toMatch(new RegExp(`/events/${id}$`));
});

test("imageUrl", () => {
  const mediumUrl = "http://www.example.com/event.png";
  const event = new EventModel({ image: { mediumUrl } });

  expect(event.imageUrl).toEqual(mediumUrl);
});


test("isLive before start date", () => {
  const startsAt = new Date().getTime() + 5000;
  const event = new EventModel({ startsAt, endsAt: startsAt });

  expect(event.isLive).toBe(false);
});

test("isLive after start date", () => {
  const startsAt = new Date().getTime() - 5000;
  const event = new EventModel({ startsAt, endsAt: startsAt + 5000 });

  expect(event.isLive).toBe(true);
});

test("remainingSpots when cap is hit", () => {
  const event = new EventModel({ cap: 5, acceptedCount: 5 });

  expect(event.remainingSpots).not.toMatch(new RegExp("\d"));
});

test("remainingSpots when cap hasn't been hit", () => {
  const event = new EventModel({ cap: 5, acceptedCount: 3 });

  expect(event.remainingSpots).toContain("2");
});

test("rsvps when over the limit", () => {
  const rsvpPreview = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const event = new EventModel({ rsvpPreview });

  expect(event.rsvps.length).toEqual(PREVIEW_LIMIT);
});

test("rsvps when under the limit", () => {
  const rsvpPreview = [1, 2, 3];
  const event = new EventModel({ rsvpPreview });

  expect(event.rsvps.length).toEqual(rsvpPreview.length);
});

test("rsvpExtra", () => {
  const event = new EventModel({ rsvpPreview: [1, 2, 3], acceptedCount: 10 });

  expect(event.rsvpExtra).toEqual(7);
});

test("startsAtDisplay", () => {
  const startsAt = new Date();
  const event = new EventModel({ startsAt });

  expect(event.startsAtDisplay).toMatch(datePatternFrom(startsAt));
});
