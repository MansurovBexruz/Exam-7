// ===============================================
// UNIVERSITET BOSHQARUV TIZIMI - TEST KODLARI
// ===============================================
// Bu file barcha class'larning to'g'ri ishlashini tekshiradi
// Test qilinadigan qismlar:
// 1. Student class - talaba yaratish, kursga yozish, status o'zgartirish
// 2. Course class - kurs yaratish, talaba qo'shish/o'chirish, sig'im tekshirish
// 3. University class - universitet yaratish, talaba/kurs boshqaruvi
// 4. Class'lar orasidagi bog'lanishlar
// 5. Access modifier'larning to'g'ri ishlashi
// 6. Xato holatlarni boshqarish
// ===============================================

import { StudentStatus, CourseLevel, Semester } from "./enums";
import { Student } from "./student";
import { Course } from "./course";
import { University } from "./university";


// // ===============================================
// // TEST 1: STUDENT CLASS TESTLARI
// // ===============================================

// 1.1 Student yaratish testi
console.log("1.1 Student yaratish testi:");
const student1 = new Student(20230001, "Ahmadov Javohir Karimovich", "javohir@student.uz");
const student2 = new Student(20230002, "Karimova Malika Azizovna", "malika@student.uz");
const student3 = new Student(20230003, "Olimov Sardor Bekovich", "sardor@student.uz");



console.log("✅ 3 ta student yaratildi");
console.log("   - Student 1:", student1.getStudentInfo());
console.log("   - Student 2:", student2.getStudentInfo());
console.log("   - Student 3:", student3.getStudentInfo());

// 1.2 Student status o'zgartirish testi
console.log("\n1.2 Student status o'zgartirish testi:");
student1.updateStatus(StudentStatus.ON_LEAVE);
console.log("✅ Student1 status ta'tilga o'zgartirildi:", student1.getStudentInfo());

student2.updateStatus(StudentStatus.SUSPENDED);
console.log("✅ Student2 status to'xtatilganga o'zgartirildi:", student2.getStudentInfo());

// // ===============================================
// // TEST 2: COURSE CLASS TESTLARI
// // ===============================================


// // 2.1 Course yaratish testi
console.log("2.1 Course yaratish testi:");
const mathCourse = new Course(
	"MATH101",
	"Oliy matematika",
	CourseLevel.BEGINNER,
	Semester.FALL,
	30
);
const physicsCourse = new Course(
	"PHYS201",
	"Fizika",
	CourseLevel.INTERMEDIATE,
	Semester.SPRING,
	25
);

const csCourse = new Course("CS301", "Algoritmlar", CourseLevel.ADVANCED, Semester.FALL, 20);

console.log("✅ 3 ta kurs yaratildi");
console.log("   - Math kursi:", JSON.stringify(mathCourse.getCourseDetails()));
console.log("   - Physics kursi:", JSON.stringify(physicsCourse.getCourseDetails()));
console.log("   - CS kursi:", JSON.stringify(csCourse.getCourseDetails()));

// 2.2 Course level upgrade testi (protected method)
console.log("\n2.2 Course level upgrade testi:");
// mathCourse.upgradeCourseLevel(); // Bu protected method - faqat meros oluvchi classlar ishlatadi
console.log("✅ Protected method - faqat meros oluvchi classlar ishlatadi");

// 2.3 Course semester o'zgartirish testi
console.log("\n2.3 Course semester o'zgartirish testi:");
mathCourse.changeSemester(Semester.SUMMER);
console.log(
	"✅ Math kursi yoz semestriga o'zgartirildi:",
	JSON.stringify(mathCourse.getCourseDetails())
);

// 2.4 Course capacity testi
console.log("\n2.4 Course capacity testi:");
console.log("   - Math kursi bo'sh joylari:", mathCourse.getAvailableSpots());
console.log("   - Physics kursi bo'sh joylari:", physicsCourse.getAvailableSpots());

// ===============================================
// TEST 3: UNIVERSITY CLASS TESTLARI
// ===============================================
console.log("\n\n🏛️ TEST 3: UNIVERSITY CLASS TESTLARI");
console.log("-".repeat(40));

// 3.1 University yaratish testi
console.log("3.1 University yaratish testi:");
const tatu = new University("TATU", "Toshkent sh., Amir Temur ko'chasi 108", 1955, 5000);
const nuu = new University("NUU", "Toshkent sh., Universitet ko'chasi 4", 1920, 8000);

console.log("✅ 2 ta universitet yaratildi");
console.log("   - TATU:", tatu.getUniversityInfo());
console.log("   - NUU:", nuu.getUniversityInfo());

// 3.2 University semester o'zgartirish testi
console.log("\n3.2 University semester o'zgartirish testi:");
tatu.changeSemester(Semester.SPRING);
console.log("✅ TATU semestri bahorga o'zgartirildi:", tatu.getUniversityInfo());

// ===============================================
// TEST 4: CLASS'LAR ORASIDAGI BOG'LANISH TESTLARI
// ===============================================
// console.log("\n\n🔗 TEST 4: CLASS'LAR ORASIDAGI BOG'LANISH TESTLARI");
// console.log("-".repeat(50));

// 4.1 Studentlarni universitetga qo'shish
console.log("4.1 Studentlarni universitetga qo'shish:");
const result1 = tatu.addStudent(student1);
const result2 = tatu.addStudent(student2);
const result3 = tatu.addStudent(student3);

console.log("✅ TATU ga studentlar qo'shildi:");
console.log("   - Student1 qo'shildi:", result1);
console.log("   - Student2 qo'shildi:", result2);
console.log("   - Student3 qo'shildi:", result3);
console.log("   - Jami studentlar:", tatu.getStudentCount());

// 4.2 Kurslarni universitetga qo'shish
console.log("\n4.2 Kurslarni universitetga qo'shish:");
const courseResult1 = tatu.addCourse(mathCourse);
const courseResult2 = tatu.addCourse(physicsCourse);
const courseResult3 = tatu.addCourse(csCourse);

// console.log("✅ TATU ga kurslar qo'shildi:");
// console.log("   - Math kursi qo'shildi:", courseResult1);
// console.log("   - Physics kursi qo'shildi:", courseResult2);
// console.log("   - CS kursi qo'shildi:", courseResult3);
// console.log("   - Jami kurslar:", tatu.getCourseCount());

// 4.3 Studentlarni kurslarga yozish (Many-to-Many bog'lanish)
console.log("\n4.3 Studentlarni kurslarga yozish:");

// Student1 ni Math va Physics kurslariga yozish
const enrollResult1 = student1.enrollInCourse(mathCourse);
const enrollResult2 = student1.enrollInCourse(physicsCourse);
console.log("✅ Student1 kurslarga yozildi:");
console.log("   - Math kursiga:", enrollResult1);
console.log("   - Physics kursiga:", enrollResult2);
console.log("   - Student1 kurslari:", student1.getEnrolledCourses());

// Student2 ni faqat Math kursiga yozish
const enrollResult3 = student2.enrollInCourse(mathCourse);
console.log("✅ Student2 Math kursiga yozildi:", enrollResult3);

// Student3 ni barcha kurslarga yozish
const enrollResult4 = student3.enrollInCourse(mathCourse);
const enrollResult5 = student3.enrollInCourse(physicsCourse);
const enrollResult6 = student3.enrollInCourse(csCourse);
console.log("✅ Student3 barcha kurslarga yozildi");

// 4.4 Kurs statistikalari
console.log("\n4.4 Kurs statistikalari:");
console.log("   - Math kursidagi studentlar soni:", mathCourse.getEnrollmentCount());
console.log("   - Math kursidagi bo'sh joylar:", mathCourse.getAvailableSpots());
console.log("   - Physics kursidagi studentlar soni:", physicsCourse.getEnrollmentCount());
console.log("   - CS kursidagi studentlar soni:", csCourse.getEnrollmentCount());

// // ===============================================
// // TEST 5: UNIVERSITET ORQALI MA'LUMOT OLISH TESTLARI
// // ===============================================
// console.log("\n\n📊 TEST 5: UNIVERSITET ORQALI MA'LUMOT OLISH TESTLARI");
// console.log("-".repeat(55));

// // 5.1 ID bo'yicha student topish
// console.log("5.1 ID bo'yicha student topish:");
// const foundStudent = tatu.findStudentById(20230001);
// if (foundStudent) {
// 	console.log("✅ Student topildi:", foundStudent.getStudentInfo());
// } else {
// 	console.log("❌ Student topilmadi");
// }

// const notFoundStudent = tatu.findStudentById(99999999);
// console.log(
// 	"   - Mavjud bo'lmagan student:",
// 	notFoundStudent === null ? "null qaytarildi" : "xato"
// );

// // 5.2 ID bo'yicha kurs topish
// console.log("\n5.2 ID bo'yicha kurs topish:");
// const foundCourse = tatu.findCourseById("MATH101");
// if (foundCourse) {
// 	console.log("✅ Kurs topildi:", JSON.stringify(foundCourse.getCourseDetails()));
// } else {
// 	console.log("❌ Kurs topilmadi");
// }

// // 5.3 Kursdagi studentlar ro'yxati
// console.log("\n5.3 Kursdagi studentlar ro'yxati:");
// const studentsInMath = tatu.getStudentsInCourse("MATH101");
// console.log("✅ Math kursdagi studentlar:", studentsInMath.length, "ta");
// studentsInMath.forEach((student, index) => {
// 	console.log(`   ${index + 1}. ${student.getStudentInfo()}`);
// });

// // 5.4 Talaba kurslari ro'yxati
// console.log("\n5.4 Talaba kurslari ro'yxati:");
// const student1Courses = tatu.getCoursesForStudent(20230001);
// console.log("✅ Student1 kurslari:", student1Courses.length, "ta");
// student1Courses.forEach((course, index) => {
// 	console.log(`   ${index + 1}. ${JSON.stringify(course.getCourseDetails())}`);
// });

// // ===============================================
// // TEST 6: XATO HOLATLAR TESTLARI
// // ===============================================
// console.log("\n\n⚠️ TEST 6: XATO HOLATLAR TESTLARI");
// console.log("-".repeat(40));

// // 6.1 Bir xil studentni ikki marta qo'shish
// console.log("6.1 Bir xil studentni ikki marta qo'shish:");
// const duplicateResult = tatu.addStudent(student1);
// console.log(
// 	"✅ Takrorlangan student qo'shish:",
// 	duplicateResult ? "Xato - qo'shildi" : "To'g'ri - rad etildi"
// );

// // 6.2 Bir xil kursni ikki marta qo'shish
// console.log("\n6.2 Bir xil kursni ikki marta qo'shish:");
// const duplicateCourseResult = tatu.addCourse(mathCourse);
// console.log(
// 	"✅ Takrorlangan kurs qo'shish:",
// 	duplicateCourseResult ? "Xato - qo'shildi" : "To'g'ri - rad etildi"
// );

// // 6.3 Studentni bir xil kursga ikki marta yozish
// console.log("\n6.3 Studentni bir xil kursga ikki marta yozish:");
// const duplicateEnrollResult = student1.enrollInCourse(mathCourse);
// console.log(
// 	"✅ Takrorlangan kursga yozish:",
// 	duplicateEnrollResult ? "Xato - yozildi" : "To'g'ri - rad etildi"
// );

// // 6.4 Faol bo'lmagan studentni kursga yozish
// console.log("\n6.4 Faol bo'lmagan studentni kursga yozish:");
// // student2 SUSPENDED holatda
// const suspendedEnrollResult = student2.enrollInCourse(physicsCourse);
// console.log(
// 	"✅ Faol bo'lmagan student yozish:",
// 	suspendedEnrollResult ? "Xato - yozildi" : "To'g'ri - rad etildi"
// );

// // 6.5 Mavjud bo'lmagan studentni o'chirish
// console.log("\n6.5 Mavjud bo'lmagan studentni o'chirish:");
// const removeNonExistentResult = tatu.removeStudent(99999999);
// console.log(
// 	"✅ Mavjud bo'lmagan student o'chirish:",
// 	removeNonExistentResult ? "Xato - o'chirildi" : "To'g'ri - topilmadi"
// );

// // ===============================================
// // TEST 7: KURS SIG'IM TESTLARI
// // ===============================================
// console.log("\n\n📏 TEST 7: KURS SIG'IM TESTLARI");
// console.log("-".repeat(40));

// // 7.1 Kichik sig'imli kurs yaratish va to'ldirish
// console.log("7.1 Kichik sig'imli kurs yaratish:");
// const smallCourse = new Course("TEST101", "Test kursi", CourseLevel.BEGINNER, Semester.FALL, 2);
// tatu.addCourse(smallCourse);

// // 2 ta student qo'shish (to'ldirib yuborish)
// const student4 = new Student(20230004, "Test Student 4", "test4@student.uz");
// const student5 = new Student(20230005, "Test Student 5", "test5@student.uz");
// const student6 = new Student(20230006, "Test Student 6", "test6@student.uz");

// tatu.addStudent(student4);
// tatu.addStudent(student5);
// tatu.addStudent(student6);

// console.log("✅ 2 o'rinli test kursi yaratildi");
// console.log("   - Dastlabki bo'sh joylar:", smallCourse.getAvailableSpots());

// // Birinchi studentni qo'shish
// const addResult1 = smallCourse.addStudent(student4);
// console.log(
// 	"   - 1-student qo'shildi:",
// 	addResult1,
// 	"| Bo'sh joylar:",
// 	smallCourse.getAvailableSpots()
// );

// // Ikkinchi studentni qo'shish
// const addResult2 = smallCourse.addStudent(student5);
// console.log(
// 	"   - 2-student qo'shildi:",
// 	addResult2,
// 	"| Bo'sh joylar:",
// 	smallCourse.getAvailableSpots()
// );

// // Uchinchi studentni qo'shishga urinish (sig'im to'la)
// const addResult3 = smallCourse.addStudent(student6);
// console.log(
// 	"   - 3-student qo'shish urinishi:",
// 	addResult3 ? "Xato - qo'shildi" : "To'g'ri - rad etildi"
// );

// // ===============================================
// // TEST 8: STUDENTNI KURSDAN O'CHIRISH TESTLARI
// // ===============================================
// console.log("\n\n❌ TEST 8: STUDENTNI KURSDAN O'CHIRISH TESTLARI");
// console.log("-".repeat(50));

// // 8.1 Studentni kursdan o'chirish
// console.log("8.1 Studentni kursdan o'chirish:");
// console.log("   - Math kursdagi studentlar (oldin):", mathCourse.getEnrollmentCount());

// // Student1 ni Math kursidan o'chirish
// const dropResult1 = student1.dropCourse("MATH101");
// console.log("   - Student1 Math kursdan chiqdi:", dropResult1);
// console.log("   - Math kursdagi studentlar (keyin):", mathCourse.getEnrollmentCount());

// // 8.2 Kurs tomonidan studentni o'chirish
// console.log("\n8.2 Kurs tomonidan studentni o'chirish:");
// const removeResult1 = physicsCourse.removeStudent(20230001);
// console.log("   - Physics kursidan Student1 o'chirildi:", removeResult1);
// console.log("   - Physics kursdagi studentlar:", physicsCourse.getEnrollmentCount());

// // ===============================================
// // TEST 9: UNIVERSITET TOMONIDAN O'CHIRISH TESTLARI
// // ===============================================
// console.log("\n\n🗑️ TEST 9: UNIVERSITET TOMONIDAN O'CHIRISH TESTLARI");
// console.log("-".repeat(50));

// // 9.1 Kursni universitetdan o'chirish
// console.log("9.1 Kursni universitetdan o'chirish:");
// console.log("   - Kurslar soni (oldin):", tatu.getCourseCount());

// const removeCourseResult = tatu.removeCourse("CS301");
// console.log("   - CS kursi o'chirildi:", removeCourseResult);
// console.log("   - Kurslar soni (keyin):", tatu.getCourseCount());

// // 9.2 Studentni universitetdan o'chirish
// console.log("\n9.2 Studentni universitetdan o'chirish:");
// console.log("   - Studentlar soni (oldin):", tatu.getStudentCount());

// const removeStudentResult = tatu.removeStudent(20230003);
// console.log("   - Student3 o'chirildi:", removeStudentResult);
// console.log("   - Studentlar soni (keyin):", tatu.getStudentCount());

// // ===============================================
// // TEST 10: YAKUNIY STATISTIKALAR
// // ===============================================
// console.log("\n\n📈 TEST 10: YAKUNIY STATISTIKALAR");
// console.log("-".repeat(40));

// console.log("🏛️ UNIVERSITET STATISTIKALARI:");
// console.log("   - Universitet nomi:", tatu.getUniversityInfo());
// console.log("   - Jami studentlar:", tatu.getStudentCount());
// console.log("   - Jami kurslar:", tatu.getCourseCount());

// console.log("\n📚 KURS STATISTIKALARI:");
// console.log(
// 	"   - Math kursi:",
// 	mathCourse.getEnrollmentCount(),
// 	"student,",
// 	mathCourse.getAvailableSpots(),
// 	"bo'sh joy"
// );
// console.log(
// 	"   - Physics kursi:",
// 	physicsCourse.getEnrollmentCount(),
// 	"student,",
// 	physicsCourse.getAvailableSpots(),
// 	"bo'sh joy"
// );
// console.log(
// 	"   - Test kursi:",
// 	smallCourse.getEnrollmentCount(),
// 	"student,",
// 	smallCourse.getAvailableSpots(),
// 	"bo'sh joy"
// );

// console.log("\n👨‍🎓 STUDENT STATISTIKALARI:");
// console.log("   - Student1 kurslari:", student1.getEnrolledCourses().length, "ta");
// console.log("   - Student2 kurslari:", student2.getEnrolledCourses().length, "ta");
// console.log("   - Student4 kurslari:", student3.getEnrolledCourses().length, "ta");

// // ===============================================
// // TEST YAKUNLANDI
// // ===============================================
// console.log("\n" + "=".repeat(60));
// console.log("🎉 BARCHA TESTLAR MUVAFFAQIYATLI YAKUNLANDI!");
// console.log("✅ Student class - ishlaydi");
// console.log("✅ Course class - ishlaydi");
// console.log("✅ University class - ishlaydi");
// console.log("✅ Class'lar orasidagi bog'lanish - ishlaydi");
// console.log("✅ Access modifier'lar - to'g'ri ishlaydi");
// console.log("✅ Xato holatlar - to'g'ri boshqariladi");
// console.log("✅ Ma'lumotlar izchilligi - saqlanadi");
// console.log("=".repeat(60));
