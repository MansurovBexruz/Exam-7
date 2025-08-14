import { Course } from "./course";
import { Semester } from "./enums";
import { Student } from "./student";

export class University {
  private currentSemester: Semester;
  private students: Student[];
  private courses: Course[];
  constructor(
    public universityName: string,
    public address: string,
    protected establishedYear: number,
    private totalCapacity: number
  ) {
    this.currentSemester = Semester.SUMMER;
    this.students = Course.prototype.enrolledStudents;
    this.courses = Student.prototype.enrolledCourses;
  }

  public getUniversityInfo(): string {
    return `${this.universityName}, manzil: ${this.address}, joriy semestr: ${this.currentSemester}`;
  }

  public changeSemester(newSemester: Semester): void {
    this.currentSemester = newSemester;
  }

  protected isAcademicSemester(): boolean {
    if (
      this.currentSemester === Semester.FALL ||
      this.currentSemester === Semester.SUMMER
    ) {
      return true;
    }

    return false;
  }

  private generateSemesterReport(): string {
    return `Kuz semestri: ${this.students.length} talaba, ${this.courses} kurs`;
  }

  public addStudent(student: Student): boolean {
    if (this.students.includes(student)) {
      return false;
    } else {
      this.students.push(student);
      return true;
    }
  }

  public addCourse(course: Course): boolean {
    if (this.courses.includes(course)) {
      return false;
    } else {
      this.courses.push(course);
      return true;
    }
  }

  public getStudentCount(): number {
    return this.students.length;
  }

  public getCourseCount(): number {
    return this.courses.length;
  }
}
