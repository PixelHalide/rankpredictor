type CourseOptions = { honors: boolean; minors: boolean };
type Course = [name: string, credits: number];

export function getVisibleCourses(
  subjects: Record<string, number>,
  { honors, minors }: CourseOptions,
): Course[] {
  return Object.entries(subjects).filter(([name]) => {
    if (!honors && name.includes("Honors")) return false;
    if (!minors && name.includes("Minor") && !name.includes("Program")) {
      return false;
    }
    return true;
  });
}

export function calculateGpa(
  courses: readonly Course[],
  grades: Readonly<Partial<Record<string, string>>>,
): number | null {
  let totalPoints = 0;
  let totalCredits = 0;

  for (const [name, credits] of courses) {
    const grade = grades[name];
    if (grade === undefined || grade === "") continue;

    totalPoints += Number(grade) * credits;
    totalCredits += credits;
  }

  return totalCredits ? Number((totalPoints / totalCredits).toFixed(2)) : null;
}
