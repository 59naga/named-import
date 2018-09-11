import { strictEqual } from "assert";
import namedImport from "./";

it("should import named default export", async () => {
  const fixture = await namedImport("./fixture");
  strictEqual(fixture, "foo");
});

it("should import named other export", async () => {
  const fixture = await namedImport("./fixture", "other");
  strictEqual(fixture, "bar");
});
