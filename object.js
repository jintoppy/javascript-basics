var myObj = {
    abc: 10
};

//myObj.abc
//myObj['abc']

var keyName = 'abc'
console.log(myObj[keyName]);

myObj.child = {
    name: 'childName',
    innerChild: {
        title: 'asdf'
    }
};

console.log(myObj.child.name);
