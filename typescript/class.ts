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