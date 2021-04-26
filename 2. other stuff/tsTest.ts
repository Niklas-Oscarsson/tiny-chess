let hello = "Hello World"

console.log(hello)

interface Animal{
    name:string;
    age:number;
    sound:string;
    makeSound(): void;
}
class setAnimal{
    name: string;
    age: number;
    sound: string;
    constructor(name: string, age: number, sound: string) {
        this.name = name
        this.age = age
        this.sound = sound
    }
    makeSound(){
        return `the ${this.name} says ${this.sound}`
    }
}

const tiger: Animal = new setAnimal('tiger', 6, 'RAAAWWR')

console.log(tiger.makeSound())