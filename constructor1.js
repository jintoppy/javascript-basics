function Animal(name, legs){
    this.name = name;
    this.legs = legs;
}

Animal.prototype.getType = function(){
    
};

var dog = new Animal('Dog', 4);
var cat = new Animal('Cat', 4);
var pigeon = new Animal('Pigeon', 2);


var animalList = [dog, cat, pigeon];

var animalsWith4Legs = animalList.filter(function(val){
                                    return val.legs>2;
                                });

console.log(animalsWith4Legs);