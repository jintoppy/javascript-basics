function Academy(){
    this.students = [];
}
Academy.prototype.addStudent = function(stuObj){
    this.students.push(stuObj);
};

Academy.prototype.getStudentsWhoPassed = function(){
    //return array of names of students who passed
    return this.students
                .filter(function(val){
                    return val.mark >= 250
                })
                .map(function(val){
                    return val.name;
                });
};


var ac = new Academy();
ac.addStudent({
    name: 'Ajith',
    mark: 100
});
ac.addStudent({
    name: 'Bhavana',
    mark: 300
});
ac.addStudent({
    name: 'Rajnji',
    mark: 250
});

var res = ac.getStudentsWhoPassed();
console.log(res);












//Constructor function
//OOPS concepts
//class
//inheritance

// function Abc(name){
//     this.name = name;
// }


// Abc.prototype.sayName = function(){
//     console.log(this.name);
// };

// var a = new Abc('Aby');
// var b = new Abc('Aju');

