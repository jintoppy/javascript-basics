var students = [
    {
        name: 'Arjun',
        mark: 250
    },
    {
        name: 'Allu',
        mark: 150
    },
    {
        name: 'Bhavana',
        mark: 350
    }
];
console.log(students);
var result = students
                .filter(function(val){
                    return val.mark >= 250;
                })
                .map(function(val){
                    return val.name;
                })
                .reduce(function(acc,curr){
                    acc += curr + ',';
                    return acc;
                }, 'Students who passed are ');

console.log(result);

//Students who passed are Arjun, Bhavana


// var arr = [10, 'Hello', 30, 'Hi'];

// var arr1 = arr.filter(function(value){
//                 return typeof value === 'string';
//               });

// console.log(arr1);
// console.log(arr);


// var arr1 = arr.map(function(val){
//                 return 'value is ' + val;
//             });

// console.log(arr1);

// console.log(arr);
