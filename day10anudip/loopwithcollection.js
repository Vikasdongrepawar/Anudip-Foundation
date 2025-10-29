let marks = [85, 42, 78, 90, 56, 67];
marks.sort((a, b) => b - a);
console.log("Sorted Marks:", marks);

let updatedMarks = marks.map(m => m + 10);
console.log("Updated Marks:", updatedMarks);

let passedStudents = updatedMarks.filter(m => m >= 50);
console.log("Passed Students Marks:", passedStudents);

const getStudents = () => {
    const students = [
        { id: 1, name: "Aman", email: "aman@gmail.com", course: "BCA", age: 21 },
        { id: 2, name: "Riya", email: "riya@gmail.com", course: "MCA", age: 24 },
        { id: 3, name: "Karan", email: "karan@gmail.com", course: "B.Tech", age: 22 },
        { id: 4, name: "Simran", email: "simran@gmail.com", course: "MBA", age: 25 }
    ];

    students.map((stu) => {
        console.log(stu.id + " | " + stu.name + " | " + stu.course + " | " + stu.email);
    });
};
getStudents();

const getCourses = () => {
    const courses = [
        { id: 201, name: "Web Development", fee: 20000 },
        { id: 202, name: "Data Science", fee: 30000 },
        { id: 203, name: "Graphic Design", fee: 15000 }
    ];

    courses.sort((a, b) => a.fee - b.fee);
    console.log("Sorted Courses by Fee:", courses);

    const newCourses = courses.map((c) => ({
        ...c,
        feeWithGST: c.fee * 1.18
    }));

    console.log("Courses with GST:");
    console.log(newCourses);
};
getCourses();
