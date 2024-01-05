export function canAccessCurriculumPanel(role: "teacher" | "student") {
  return role === "teacher";
}
