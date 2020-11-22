(function () {
    'use strict';

    class Student {
        constructor(first, last, age, grade) {
            this.first = first;
            this.last = last;
            this.age = age;
            this.grade = grade;
        }
    }


    const students = [new Student('Batsheva', 'Hershfeld', '20', '1'),
    new Student('Shai', 'Hershfeld', '23', '1'),
    new Student('Chani', 'Tropper', '15', '10')];

    function printStudents(backwards, ...args) {
        args.forEach(student => {
            if (backwards) {
                console.log(`${student.last}, ${student.first}, ${student.age}, ${student.grade}`);
            }
            else {
                console.log(`${student.first}, ${student.last}, ${student.age}, ${student.grade}`);

            }
        }
        );

    }
    function clone(student) {
        const { first, last, ...rest } = student;
        return {
            first: last,
            last: first,
            ...rest
        };
    }
    printStudents(false, ...students);

}());