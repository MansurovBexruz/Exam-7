## 🎯 VAZIFA: "Universitet boshqaruv tizimi" yaratish

---

## 📋 ENUM'LAR - Avval enum'larni tushunib olaylik

### 1️⃣ StudentStatus enum

enum StudentStatus {
ACTIVE = "faol",
SUSPENDED = "to'xtatilgan",
GRADUATED = "bitirgan",
ON_LEAVE = "ta'tilda"
}
Misol: Agar talaba muvaffaqiyatli o'qiyotgan bo'lsa - ACTIVE, agar chetlashtirilgan bo'lsa - SUSPENDED

### 2️⃣ CourseLevel enum

enum CourseLevel {
BEGINNER = 1, // Boshlang'ich daraja
INTERMEDIATE = 2, // O'rta daraja
ADVANCED = 3, // Yuqori daraja
EXPERT = 4 // Mutaxassis darajasi
}
Misol: "Matematika asoslari" kursi BEGINNER, "Ilg'or algoritmlar" kursi ADVANCED bo'ladi

### 3️⃣ Semester enum

enum Semester {
FALL = "kuz",
SPRING = "bahor",
SUMMER = "yoz",
WINTER = "qish"
}
Misol: Kurs kuz semestrida o'qitilsa FALL, bahor semestrida bo'lsa SPRING

---

## 👨‍🎓 1-CLASS: Student (Talaba)

### 🔧 Field'lar (Xususiyatlar):

1. private studentId: number

- Nima: Har bir talabaning noyob raqami
- Nega private: Faqat class ichida o'zgartirilishi kerak, tashqaridan o'zgartirib bo'lmaydi
- Misol: 20230001, 20230002, 20230003...

2. protected fullName: string

- Nima: Talabaning to'liq ismi
- Nega protected: Meros oluvchi classlar (masalan GraduateStudent) ham ishlatishi mumkin
- Misol: "Ahmadov Javohir Karimovich"

3. public email: string

- Nima: Talabaning email manzili
- Nega public: Barcha joydan kirishga ruxsat berilgan
- Misol: "javohir.ahmadov@student.uz"

4. private status: StudentStatus

- Nima: Talabaning joriy holati (enum orqali)
- Nega private: Faqat class methodlari orqali o'zgartirilishi kerak
- Misol: StudentStatus.ACTIVE yoki StudentStatus.SUSPENDED

5. private enrolledCourses: Course[]

- Nima: Talaba yozilgan kurslar ro'yxati
- Nega private: Faqat class methodlari orqali boshqariladi
- Misol: [Math101_kursi, Physics201_kursi,CS101_kursi]

6. private university: University

- Nima: Talaba o'qiyotgan universitet
- Nega private: Faqat ro'yxatdan o'tish paytida o'rnatiladi
- Misol: TATU_universiteti

### 🛠️ Method'lar:

1. public getStudentInfo(): string

- Vazifasi: Talaba haqida ma'lumot beradi
- Kim foydalanadi: Barcha tashqi kodlar
- Nima qaytaradi: "ID: 20230001, Ism: Ahmadov Javohir, Email: javohir@student.uz, Holat: faol"
- Ketma-ketlik: ID → Ism → Email → Status ni birlashtiradi

2. public updateStatus(newStatus: StudentStatus): void

- Vazifasi: Talaba holatini yangilaydi
- Parametr: StudentStatus enum qiymati
- Misol ishlatish: updateStatus(StudentStatus.GRADUATED)
- Ketma-ketlik: Yangi statusni qabul qiladi → Tekshiradi → O'zgartiradi

3. protected isEligibleForEnrollment(): boolean

- Vazifasi: Talaba kursga yozila oladimi tekshiradi
- Kim foydalanadi: Meros oluvchi classlar
- Nima qaytaradi: true (agar ACTIVE) yoki false
- Ketma-ketlik: Status tekshiradi → ACTIVE bo'lsa true → Boshqa holda false

4. private validateEmail(email: string): boolean

- Vazifasi: Email to'g'riligini tekshiradi
- Kim foydalanadi: Faqat shu class
- Tekshiradi: @ belgisi bormi, domen to'g'rimi
- Ketma-ketlik: @ ni qidiradi → Domen tekshiradi → Natija qaytaradi

5. public enrollInCourse(course: Course): boolean

- Vazifasi: Talabani kursga yozadi
- Parametr: Course obyekti
- Qaytaradi: true (muvaffaqiyatli) yoki false (xato)
- Tekshiradi: Talaba faolmi, kurs mavjudmi, avval yozilganmi
- Misol: student.enrollInCourse(math101)

6. public dropCourse(courseId: string): boolean

- Vazifasi: Talabani kursdan chiqaradi
- Parametr: Kurs ID'si
- Qaytaradi: true (o'chirildi) yoki false (topilmadi)
- Ketma-ketlik: Kursni topadi → Ro'yxatdan o'chiradi → Tasdiqlaydigan xabar

7. public getEnrolledCourses(): string[]

- Vazifasi: Yozilgan kurslar nomini qaytaradi
- Qaytaradi: ["Matematika", "Fizika", "Dasturlash"]
- Kim foydalanadi: Tashqi kodlar (talaba profili uchun)

8. public getUniversity(): string

- Vazifasi: Talaba o'qiyotgan universitet nomini beradi
- Qaytaradi: "Toshkent Davlat Universiteti"
- Foydalanish: Talaba ma'lumotlarini ko'rsatishda

---

## 📚 2-CLASS: Course (Kurs)

### 🔧 Field'lar:

1. private courseId: string

- Nima: Kursning noyob identifikatori
- Nega private: Faqat class ichida boshqariladi
- Misol: "MATH101", "CS201", "PHYS301"

2. public courseName: string

- Nima: Kurs nomi
- Nega public: Hamma joydan o'qilishi mumkin
- Misol: "Oliy matematika", "Dasturlash asoslari", "Fizika"

3. protected level: CourseLevel

- Nima: Kurs qiyinlik darajasi
- Nega protected: Meros oluvchi classlar ham kerak
- Misol: CourseLevel.BEGINNER, CourseLevel.ADVANCED

4. private semester: Semester

- Nima: Qaysi semestrda o'qitiladi
- Nega private: Faqat class tomonidan boshqariladi
- Misol: Semester.FALL, Semester.SPRING

5. private enrolledStudents: Student[]

- Nima: Kursga yozilgan talabalar ro'yxati
- Nega private: Faqat kurs methodlari orqali boshqariladi
- Misol: [student1, student2, student3]

6. private maxCapacity: number

- Nima: Kursga qabul qilinadigan maksimal talaba soni
- Nega private: Kurs yaratilganda belgilanadi
- Misol: 30, 50, 100

7. private university: University

- Nima: Kurs qaysi universitetga tegishli
- Nega private: Kurs yaratilganda o'rnatiladi
- Misol: TATU_universiteti

### 🛠️ Method'lar:

1. public getCourseDetails(): object

- Vazifasi: Kurs haqida batafsil ma'lumot beradi
- Kim foydalanadi: Tashqi kodlar
- Qaytaradi: {name: "Matematika", level: 1, semester: "kuz"}
- Ketma-ketlik: Barcha field'larni yig'adi → Object yaratadi → Qaytaradi

2. public changeSemester(newSemester: Semester): void

- Vazifasi: Kurs semestrini o'zgartiradi
- Parametr: Semester enum qiymati
- Misol: changeSemester(Semester.SUMMER)
- Ketma-ketlik: Yangi semestr qabul qiladi → Tekshiradi → O'zgartiradi

3. protected upgradeCourseLevel(): void

- Vazifasi: Kurs darajasini oshiradi
- Kim foydalanadi: Meros oluvchi classlar
- Misol: BEGINNER → INTERMEDIATE ga o'tkazadi
- Ketma-ketlik: Joriy darajani tekshiradi → +1 qiladi → Maksimumdan oshmaganini tekshiradi

4. private isAdvancedCourse(): boolean

- Vazifasi: Kurs murakkab darajadami tekshiradi
- Faqat ichki ishlatish: Boshqa methodlar uchun
- Qaytaradi: true (agar ADVANCED/EXPERT) yoki false
- Ketma-ketlik: Level qiymatini tekshiradi → 3 yoki 4 bo'lsa true

5. public addStudent(student: Student): boolean

- Vazifasi: Talabani kursga qo'shadi
- Parametr: Student obyekti
- Qaytaradi: true (qo'shildi) yoki false (joy yo'q/allaqachon bor)
- Tekshiradi: Joy bormi, talaba faolmi, takrorlanmaganmi

6. public removeStudent(studentId: number): boolean

- Vazifasi: Talabani kursdan o'chiradi
- Parametr: Talaba ID'si
- Qaytaradi: true (o'chirildi) yoki false (topilmadi)
- Ketma-ketlik: Talabani topadi → Ro'yxatdan o'chiradi

7. public getEnrollmentCount(): number

- Vazifasi: Kursga yozilganlar sonini qaytaradi
- Qaytaradi: 25, 45, 12 (raqam)
- Foydalanish: Joy qoldi-qolmaganini bilish uchun

8. public getAvailableSpots(): number

- Vazifasi: Qolgan bo'sh joylar sonini hisobLaydi
- Formula: maxCapacity - enrolledStudents.length
- Qaytaradi: 5 (agar 50dan 45ta talaba yozilgan bo'lsa)

9. public getUniversity(): string

- Vazifasi: Kurs qaysi universitetga tegishli ekanini beradi
- Qaytaradi: "Toshkent Davlat Universiteti"

---

## 🏛️ 3-CLASS: University (Universitet)

### 🔧 Field'lar:

1. private universityName: string

- Nima: Universitet nomi
- Nega private: Rasmiy o'zgartirish kerak
- Misol: "Toshkent Davlat Universiteti", "TATU"

2. public address: string

- Nima: Universitet manzili
- Nega public: Ommaga ma'lum
- Misol: "Toshkent sh., Universitet ko'chasi 4-uy"

3. protected establishedYear: number

- Nima: Tashkil etilgan yili
- Nega protected: Kengaytirilgan versiyalar uchun
- Misol: 1920, 1955, 2000

4. private currentSemester: Semester

- Nima: Joriy o'quv semestri
- Nega private: Faqat universitet tomonidan o'zgartiriladi
- Misol: Semester.FALL (agar kuz semestri bo'lsa)

5. private students: Student[]

- Nima: Universitetdagi barcha talabalar ro'yxati
- Nega private: Faqat universitet tomonidan boshqariladi
- Misol: [student1, student2, student3, ...]

6. private courses: Course[]

- Nima: Universitet taklif qiladigan barcha kurslar
- Nega private: Faqat universitet administratori boshqaradi
- Misol: [math101, physics201, cs301, ...]

7. private totalCapacity: number

- Nima: Universitetning umumiy talaba sig'imi
- Nega private: Universitet resurslari bilan bog'liq
- Misol: 5000, 10000, 15000

### 🛠️ Method'lar:

1. public getUniversityInfo(): string

- Vazifasi: Universitet haqida umumiy ma'lumot
- Barchaga ochiq: Ha
- Qaytaradi: "TATU, manzil: Toshkent, joriy semestr: kuz"
- Ketma-ketlik: Nom → Manzil → Joriy semestr → Birlashtiradi

2. public changeSemester(newSemester: Semester): void

- Vazifasi: Yangi semestr e'lon qiladi
- Parametr: Semester enum
- Misol: changeSemester(Semester.SPRING)
- Ketma-ketlik: Yangi semestrni qabul → Tasdiqlaydigan tekshirish → O'zgartiradi → Log yozadi

3. protected isAcademicSemester(): boolean

- Vazifasi: Asosiy o'quv semestrimi tekshiradi
- Meros oluvchilar uchun: Ha
- Qaytaradi: true (FALL/SPRING) yoki false (SUMMER/WINTER)
- Ketma-ketlik: Joriy semestrni tekshiradi → FALL yoki SPRING bo'lsa true

4. private generateSemesterReport(): string

- Vazifasi: Semestr hisobotini yaratadi
- Faqat ichki: Boshqaruv uchun
- Yaratadi: "Kuz semestri: 1250 talaba, 45 kurs"
- Ketma-ketlik: Ma'lumotlarni yig'adi → Formatga soladi → Hisobot tayyorlaydi

5. public addStudent(student: Student): boolean

- Vazifasi: Yangi talabani universitetga qabul qiladi
- Parametr: Student obyekti
- Qaytaradi: true (qabul qilindi) yoki false (joy yo'q/takrorlangan)
- Tekshiradi: Sig'im yetadimi, email takrorlanmaganmi

6. public removeStudent(studentId: number): boolean

- Vazifasi: Talabani universitetdan chiqaradi
- Parametr: Talaba ID'si
- Qaytaradi: true (o'chirildi) yoki false (topilmadi)
- Ketma-ketlik: Talabani topadi → Kurslardan ham o'chiradi → Ro'yxatdan o'chiradi

7. public addCourse(course: Course): boolean

- Vazifasi: Yangi kursni universitetga qo'shadi
- Parametr: Course obyekti
- Qaytaradi: true (qo'shildi) yoki false (allaqachon bor)
- Tekshiradi: Kurs ID'si takrorlanmaganmi

8. public removeCourse(courseId: string): boolean

- Vazifasi: Kursni universitetdan o'chiradi
- Parametr: Kurs ID'si
- Qaytaradi: true (o'chirildi) yoki false (topilmadi)
- Ogohlantrish: Kursga yozilgan talabalarni ham chiqaradi

9. public getStudentCount(): number

- Vazifasi: Universitetdagi jami talabalar sonini qaytaradi
- Qaytaradi: 3500, 7250, 12000 (raqam)
- Foydalanish: Statistika uchun

10. public getCourseCount(): number

- Vazifasi: Universitet taklif qiladigan kurslar sonini beradi
- Qaytaradi: 120, 250, 180 (raqam)
- Foydalanish: Kurs katalogi uchun

11. public findStudentById(studentId: number): Student | null

- Vazifasi: ID bo'yicha talabani topadi
- Parametr: Talaba ID'si
- Qaytaradi: Student obyekti yoki null (topilmasa)
- Foydalanish: Talaba ma'lumotlarini olish uchun

12. public findCourseById(courseId: string): Course | null

- Vazifasi: ID bo'yicha kursni topadi
- Parametr: Kurs ID'si
- Qaytaradi: Course obyekti yoki null (topilmasa)
- Foydalanish: Kurs ma'lumotlarini olish uchun

13. public getStudentsInCourse(courseId: string): Student[]

- Vazifasi: Belgilangan kursdagi talabalar ro'yxatini beradi
- Parametr: Kurs ID'si
- Qaytaradi: Student obyektlari massivi
- Foydalanish: Kurs davomati uchun

14. public getCoursesForStudent(studentId: number): Course[]

- Vazifasi: Talaba yozilgan kurslar ro'yxatini beradi
- Parametr: Talaba ID'si
- Qaytaradi: Course obyektlari massivi
- Foydalanish: Talaba jadvali uchun

---

## 🔑 ACCESS MODIFIER'LAR (Ruxsat darajalari)

### 🔒 PRIVATE

- Kimga ruxsat: Faqat o'sha class ichida
- Misol: private studentId - faqat Student class ichida ishlatiladi
- Nega ishlatiladi: Ma'lumotni himoya qilish uchun

### 🔓 PROTECTED

- Kimga ruxsat: O'sha class + meros oluvchi classlar
- Misol: protected fullName - Student va GraduateStudent classlarda
- Nega ishlatiladi: Meros uchun ochiq, boshqalarga yopiq

### 🌐 PUBLIC

- Kimga ruxsat: Hamma joydan
- Misol: public email - istalgan joydan foydalanish mumkin
- Nega ishlatiladi: Umumiy foydalanish uchun

---

## 🔗 CLASS'LARNI BOG'LASH

### 🎯 ASOSIY BOG'LANISHLAR

#### 1️⃣ Student ↔ Course bog'lanishi

- Har bir talaba bir nechta kursga yozilishi mumkin
- Har bir kursda bir nechta talaba bo'lishi mumkin
- Bu **Many-to-Many** munosabat

#### 2️⃣ University ↔ Student bog'lanishi

- Universitet ko'plab talabalarni o'z ichiga oladi
- Har bir talaba faqat bitta universitetda o'qiydi
- Bu **One-to-Many** munosabat

#### 3️⃣ University ↔ Course bog'lanishi

- Universitet ko'plab kurslarni taklif qiladi
- Har bir kurs faqat bitta universitetga tegishli
- Bu **One-to-Many** munosabat

---

## 🔄 BOG'LANISH MISOLLARI

### 📝 1-misol: Talabani kursga yozish

```
// Universitet orqali
university.addStudent(student1)
university.addCourse(mathCourse)

// Talabani kursga yozish
student1.enrollInCourse(mathCourse)
mathCourse.addStudent(student1)
```

### 📝 2-misol: Kurs statistikasini olish

```
// Kursda nechta talaba bor?
mathCourse.getEnrollmentCount() // 25

// Qancha joy qolgan?
mathCourse.getAvailableSpots() // 5

// Kurs qaysi universitetga tegishli?
mathCourse.getUniversity() // "TATU"
```

### 📝 3-misol: Universitet statistikasi

```
// Jami talabalar soni
university.getStudentCount() // 3500

// Jami kurslar soni
university.getCourseCount() // 180

// Belgilangan kursdagi talabalar
university.getStudentsInCourse("MATH101") // [student1, student2, ...]
```

---

## ⚡ MUHIM QOIDALAR

### 🔒 Ma'lumotlar xavfsizligi:

- Barcha asosiy ma'lumotlar private
- Faqat public methodlar orqali kirish
- Noto'g'ri ma'lumot kiritishdan himoya

### 🔄 Sinxronizatsiya:

- Talaba kursga yozilganda: Student va Course ikkalasida ham yangilanadi
- Kurs o'chirilganda: Barcha talabalar avtomatik chiqariladi
- Talaba o'chirilganda: Barcha kurslardan avtomatik chiqariladi

### 📊 Ma'lumotlar izchilligi:

- Bir xil talaba ikki marta bir kursga yozilolmaydi
- Maksimal sig'imdan oshib ketolmaydi
- Noto'g'ri ID'lar bilan ishlashda xatolik qaytaradi
