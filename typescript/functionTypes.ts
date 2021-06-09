// 函数


function add(x: number, y: number){
    return x+y;
}

function addOne(x: number, y: number,z:number){
    return x+y;
}

function addTwo(x: number, y: number,z?:number){
    return x+y;
}



add(1,2);

// Expected 3 arguments, but got 2.ts(2554)
addOne(1,2);

addTwo(1,3)

// Argument of type 'string' is not assignable to parameter of type 'number'.ts
add(1,'3');


let add2: (x: number, y: number)=>number = add;


interface Isum {
    (x: number, y: number): number;
}


let add3: Isum = add;