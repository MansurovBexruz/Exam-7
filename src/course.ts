import { Semester, type CourseLevel } from "./enums";
import { Student } from "./student";
import { University } from "./university";

export class Course {
  enrolledStudents: Student[];
  university: string;
  constructor(
    private courseId: string,
    public courseName: string,
    protected level: CourseLevel,
    private semester: Semester,
    private maxCapacity: number
  ) {
    this.enrolledStudents = [];
    this.university = University.prototype.universityName;
  }

  public getCourseDetails(): object {
    return {
      name: this.courseName,
      level: this.level,
      semester: this.semester,
    };
  }

  public changeSemester(newSemester: Semester): void {
    this.semester = newSemester;
  }

  protected upgradeCourseLevel(): void {
    this.level++;
  }

  private isAdvancedCourse(): boolean {
    if (this.level === 3 || this.level === 4) {
      return true;
    }

    return false;
  }

  public addStudent(student: Student): boolean {
    if (this.enrolledStudents.includes(student)) {
      return false;
    } else {
      this.enrolledStudents.push(student);
      return true;
    }
  }

  public getEnrollmentCount(): number {
    return this.enrolledStudents.length;
  }

  public getAvailableSpots(): number {
    return this.maxCapacity - this.enrolledStudents.length;
  }
}
