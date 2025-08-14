import { Course } from "./course";
import { StudentStatus } from "./enums";
import type { University } from "./university";

export class Student {
  status: StudentStatus;
  enrolledCourses: Course[];
  constructor(
    public studentId: number,
    protected fullName: string,
    public email: string
  ) {
    this.status = StudentStatus.ACTIVE;
    this.enrolledCourses = [];
  }

  public getStudentInfo() {
    return `ID: ${this.studentId}, Ism: ${this.fullName}, Email: ${this.email}, Holat: ${this.status}`;
  }

  public updateStatus(newStatus: StudentStatus): void {
    this.status = newStatus;
  }
  protected isEligibleForEnrollment() {
    if (this.status === "faol") {
      return true;
    }

    return false;
  }

  private validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  public getEnrolledCourses(): string[] {
    return [];
  }

  public enrollInCourse(course: Course): boolean {
    if (this.enrolledCourses.includes(course)) {
      return false;
    } else {
      this.enrolledCourses.push(course);
      return true;
    }
  }


  public getUniversity(): string {
    return "";
  }
}
