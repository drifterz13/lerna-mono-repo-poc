export function canAccessSelfCurriculumPanel(role: "teacher" | "student") {
  return true;
}

export function canAccessCurriculumPanel(role: "teacher" | "student") {
  return role === "teacher";
}
