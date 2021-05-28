function readonly(target, name, descriptor) {
    // target 类的原型对象
    descriptor.writable = false;
    return descriptor;
  }
  class Person {
      @readonly name = 'person'
  }
  const person = new Person();
  person.name = 'tom'; 

  console.log(person)


  @log
class MyClass { }

function log(target) { 
    // 这个 target 在这里就是 MyClass 这个类
   target.prototype.logger = () => `${target.name} 被调用`
}

const test = new MyClass()

console.log(test.logger())  // MyClass 被调用


@what('hi')
class Parent { }

function what(text) {
  return function(target) {
    target.prototype.logger = () => `${text}，${target.name} 被调用`
  }
}

const parent = new Parent();
console.log(parent.logger() );