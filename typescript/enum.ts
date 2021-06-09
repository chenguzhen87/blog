
// namespace 本质上是一个立即执行函数来包裹代码，隔绝作用域

// var nsTest;
// (function (nsTest) {
//     var Direction;
//     (function (Direction) {
//         Direction["Up"] = "up";
//         Direction["Down"] = "down";
//         Direction["Left"] = "left";
//         Direction["Right"] = "right";
//     })(Direction = nsTest.Direction || (nsTest.Direction = {}));
// })(nsTest || (nsTest = {}));
// var upStr = 'up';
// if (upStr === nsTest.Direction.Up) {
//     console.log('enum');
// }


namespace nsTest {
   export enum Direction {
        Up = 'up',
        Down = 'down',
        Left = 'left',
        Right = 'right'
    }
}

const upStr = 'up'

if(upStr === nsTest.Direction.Up){
  console.log('enum')
}