var hello = "Hello World";
console.log(hello);
var setAnimal = /** @class */ (function () {
    function setAnimal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    setAnimal.prototype.makeSound = function () {
        return "the " + this.name + " says " + this.sound;
    };
    return setAnimal;
}());
var tiger = new setAnimal('tiger', 6, 'RAAAWWR');
console.log(tiger.makeSound());
