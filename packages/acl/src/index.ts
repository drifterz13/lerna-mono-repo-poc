export function canAccessCurriculumPanel(role: "teacher" | "student") {
  return role === "teacher";
}

export function canAccessSelfCurriculumPanel(role: "teacher" | "student") {
  return true;
}
