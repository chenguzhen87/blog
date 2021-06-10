class Animal {
    name: string;
    constructor(name){
        this.name = name;
    }

    run(){
        return `${this.name} is running`
    }
}


const snake = new Animal('ni');

console.log(snake.run())


class Dog extends Animal {
    static age: number = 10;
    bark(){
        return `${this.name} is barking`
    }

    run(){
        console.log(  super.run())
        return `${this.name} is ${this.bark()}`
    }

  private  priv(){
        return `${this.name} is ${this.bark()}`
    }
}

const dona = new Dog('dog');

console.log(dona.bark())
console.log(dona.run())
console.log(Dog.age)

// dona.priv();

// 泛型
class Stone<T>{
    private _value: T;
    constructor(val: T) {
        this._value = val;
    }
}
let p = new Stone<number>(12)

interface Item {
    name: string;
}

class DataManager<T extends Item>{
    private data: T[];
    constructor(data: T[]) {
       this.data = data;
    }

    getItem(index: number){
        this.data[index]
    }
}
let dm = new DataManager([{name:'chenzhen'}])


// function loggingIdentity<T extends Logging>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}