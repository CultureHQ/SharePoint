import formatTimestamp from "../src/lib/format-timestamp";

import datePatternFrom from "./support/date-pattern-from";

test("builds appropriately looking date", () => {
  const date = new Date();

  expect(formatTimestamp(date)).toMatch(datePatternFrom(date));
});
