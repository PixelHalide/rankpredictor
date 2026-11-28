import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateGpa, getVisibleCourses } from "../utils/gpaCalculation.ts";
import subjectData from "../utils/subjects.ts";

const noOptions = { honors: false, minors: false };

test("Semester VII CCE excludes a hidden Minor grade without dropping electives", () => {
  const subjects = subjectData["7-CCE"];
  const miniProject = "Mini Project (Minor Specialization)";
  const electives = getVisibleCourses(subjects, noOptions);
  const grades = Object.fromEntries(electives.map(([name]) => [name, "8"]));
  grades[miniProject] = "10";

  assert.equal(electives.length, 5);
  assert.ok(electives.some(([name]) => name.includes("/ Minor Specialization")));
  const withMinor = getVisibleCourses(subjects, { ...noOptions, minors: true });
  assert.equal(calculateGpa(withMinor, grades), 8.7);
  assert.equal(calculateGpa(electives, grades), 8);
});

test("Semester VIII CCE excludes hidden Honors grades", () => {
  const subjects = subjectData["8-CCE"];
  const grades = {
    "Project Work / Practice School": "8",
    "Project Work (B. Tech Honors)": "10",
  };

  const withHonors = getVisibleCourses(subjects, { ...noOptions, honors: true });
  assert.equal(calculateGpa(withHonors, grades), 9.25);
  const standard = getVisibleCourses(subjects, noOptions);
  assert.deepEqual(standard.map(([name]) => name), [
    "Project Work / Practice School",
  ]);
  assert.equal(calculateGpa(standard, grades), 8);
});

test("F contributes credits, while unset and hidden grades do not", () => {
  const courses = getVisibleCourses(
    { Core: 3, Lab: 1, Elective: 2, "Honors Project": 8 },
    noOptions,
  );
  const grades = { Core: "8", Lab: "0", Elective: "", "Honors Project": "10" };
  assert.equal(calculateGpa(courses, grades), 6);
  assert.equal(calculateGpa(courses, { Lab: "0" }), 0);
  assert.equal(calculateGpa(courses, { Elective: "", "Honors Project": "10" }), null);
});
