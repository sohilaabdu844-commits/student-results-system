// Student Results Management System - Task 2

class Student {
constructor(id, name, grades, attendance) {
this.id = id;
this.name = name;
this.grades = grades;
this.attendance = attendance;
}

getAverage() {
let total = this.grades.reduce((sum, grade) => sum + grade, 0);
return total / this.grades.length;
}

getGrade(average) {
if (average >= 90) {
return "A";
} else if (average >= 80) {
return "B";
} else if (average >= 70) {
return "C";
} else if (average >= 60) {
return "D";
} else if (average >= 50) {
return "E";
} else {
return "F";
}
}

getFinalResult() {
let average = this.getAverage();
if (average >= 50 && this.attendance >= 75) {
return "ناجح";
} else {
return "يحتاج مراجعة";
}
}
}

const studentsList = [
new Student(1, "Ahmed", [80, 85, 90], 90),
new Student(2, "Sara", [70, 75, 65], 80),
new Student(3, "Omar", [42, 48, 45], 85),
new Student(4, "Mona", [40, 44, 48], 70)
];

studentsList.forEach((student) => {
let average = student.getAverage();
console.log("Name: " + student.name);
console.log("Average: " + average);
console.log("Grade: " + student.getGrade(average));
console.log("Result: " + student.getFinalResult());
console.log("--------------------");
});

let strugglingStudents = studentsList.filter((student) => {
let average = student.getAverage();
return average >= 40 && average <= 49;
});

let studentsAfterMercy = strugglingStudents.map((student) => {
let oldAverage = student.getAverage();
return {
name: student.name,
oldAverage: oldAverage,
newAverage: oldAverage + 5
};
});

let totalNewAverage = studentsAfterMercy.reduce((sum, student) => sum + student.newAverage, 0);

let mercyAverage = studentsAfterMercy.length > 0 ? totalNewAverage / studentsAfterMercy.length : 0;

console.log("Struggling Students After Mercy:");
console.log(studentsAfterMercy);
console.log("Average After Mercy: " + mercyAverage);
