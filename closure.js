//Higher Order Function
//Inner function has access to parent function variables

//Revealing Module Pattern
function Util(){
    var students = ['Ajith', 'Ajay'];

    return {
        getStudents: function(){
            return students;
        } 
    };
}

var utilObj =  Util();
var students = utilObj.getStudents();
console.log(students);
