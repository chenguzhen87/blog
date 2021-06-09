// 类型推断

let stri = "str";
let num = 2;

// 联合类型

let numberOrString: number | string;

function getLength(input: string | number): number {
    const strb = input as string;
    if (strb){
        return strb.length;
    } else {
        const number = input as number;
        return number.toString().length;
    }
}
