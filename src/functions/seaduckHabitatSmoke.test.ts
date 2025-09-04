import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";
import { describe, test, expect } from "vitest";
import { seaduckHabitat } from "./seaduckHabitat.js";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof seaduckHabitat).toBe("function");
  });
  test("seaduckHabitat - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await seaduckHabitat(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "seaduckHabitat", example.properties.name);
    }
  }, 60_000);
});
