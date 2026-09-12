import assert from "node:assert";
import test from "node:test";
import { inspectComponentProps } from "../src/utils/componentInspector.js";

test("inspectComponentProps validates required prop presence", () => {
  const props = { title: "Placement Portal", id: 101 };
  const validReport = inspectComponentProps("Header", props, ["title", "id"]);
  assert.strictEqual(validReport.isValid, true);
  assert.strictEqual(validReport.missingProps.length, 0);

  const invalidReport = inspectComponentProps("Header", props, ["title", "user"]);
  assert.strictEqual(invalidReport.isValid, false);
  assert.deepStrictEqual(invalidReport.missingProps, ["user"]);
});
