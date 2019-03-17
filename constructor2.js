function Academy(){
    this.students = [];
}

Academy.prototype.addStudent = function(stu){
    this.students.push(stu);
};

Academy.prototype.getPassedStudents = function(){
    return this.students
                .filter(function(studentInstance){
                    return studentInstance.isPassed()
                })
                .map(function(studentInstance){
                    return studentInstance.name;
                });
};

function Student(name, mark){
    this.name = name;
    this.mark = mark;
}

Student.prototype.isPassed = function(){
    return this.mark >= 250;
};

var stu1 = new Student('Ajith', 100);
var stu2 = new Student('Bhavana', 300);
var stu3 = new Student('Rajni', 270);
var ac = new Academy();
ac.addStudent(stu1);
ac.addStudent(stu2);
ac.addStudent(stu3);
var res = ac.getPassedStudents();
console.log(res);