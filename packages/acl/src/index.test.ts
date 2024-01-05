import { it, expect } from "vitest";

import { canAccessCurriculumPanel } from "./index";

it("should returns true, given teacher role", () => {
  expect(canAccessCurriculumPanel("teacher")).toBe(true);
});

it("should returns false, given student role", () => {
  expect(canAccessCurriculumPanel("student")).toBe(false);
});
