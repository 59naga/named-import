import spec from "eastern";
import { strictEqual } from "assert";
import namedImport from "./";

spec("should import named default export", async () => {
  const fixture = await namedImport("./fixture");
  strictEqual(fixture, "foo");
});

spec("should import named other export", async () => {
  const fixture = await namedImport("./fixture", "other");
  strictEqual(fixture, "bar");
});
