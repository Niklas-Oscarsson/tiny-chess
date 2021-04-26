`var hello = "Hello World";
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
console.log(tiger.makeSound());`


const cartItemsFlat = [ 
    { name: 'T-shirt by Stina', size: 'Small', quantity: 1 },
    { name: 'Gray EC Hoodie', size: 'Small', quantity: 1 },
    { name: 'Gray EC Hoodie', size: 'Small', quantity: 1 },
    { name: 'T-shirt by Stina', size: 'Small', quantity: 1 },
    { name: 'T-shirt by Stina', size: 'Medium', quantity: 1 } 
]
let lista = []
cartItemsFlat.forEach(a=>{
    if(lista.find(b => (b.name===a.name && b.size===a.size))){
        let index = lista.findIndex(b => (b.name===a.name && b.size===a.size))
        lista[index].quantity++
    }
    else{
        let n = a
        lista.push(n)
    }
})
console.log(lista);

