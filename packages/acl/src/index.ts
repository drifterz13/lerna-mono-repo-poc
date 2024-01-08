export function canAccessSelfCurriculumPanel(role: "teacher" | "student") {
  return true;
}

export function canAccessCurriculumPanel(role: "teacher" | "student") {
  return role === "teacher";
}

export function isTeacherRole(role: "teacher" | "student") {
  return role === "teacher";
}

export function isStudentRole(role: "teacher" | "student") {
  return role === "student";
}

