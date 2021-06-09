
// 接口
interface Person {
    readonly id: number;
    name: string;
    age: number;
    height: number;
}

// Property 'height' is missing in type '{ name: string; age: number; }' but required in type 'Person'.ts(2741)
// let chenzhen: Person = {
//     name: 'Chenzhen',
//     age:10,
// }
// Cannot assign to 'id' because it is a read-only property.ts(2540)
// chenzhen.id = 20;

interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

// 单实现
class Car implements Radio {
    switchRadio(trigger: boolean){}
}

// 多实现
class CellPhone implements Radio, Battery {
    switchRadio(trigger: boolean){}
    checkBatteryStatus(){}
}
