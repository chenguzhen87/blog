const inquirer = require('inquirer');

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`你叫什么名字?`, name => {
//     console.log(`你好 ${name}!`)
//     readline.close()
//   })

  
// var questions = [
//     {
//       type: 'input',
//       name: 'name',
//       message: "你叫什么名字?"
//     },
//     {
//         type: 'input',
//         name: 'sex',
//         message: "性别?"
//     }
//   ]
  
//   inquirer.prompt(questions).then(answers => {
//       console.log(answers)
//       console.log(`你好 ${answers['name']}!`)
//       console.log(`你好 ${answers['sex']}!`)
//   })


//   inquirer.prompt([
//     {
//         type:"input",
//         message:"请输入你的姓名：",
//         name:"name",
//         default:"大傻子"
//     },
//     {
//         type:"input",
//         message:"请输入你的年龄：",
//         name:"age",
//         default:18,
//         validate:(val)=>{
//             if(val > 10 && val < 120){
//                 return val;
//             }else{
//                 return "我猜你绝对不是一个正常人类";
//             }
//         }
//     }
// ]).then(answer=>{
//     console.log(answer);
// });


// inquirer.prompt([
//     {
//         type:"confirm",
//         message:"是否现在监听？",
//         name:"watch",
//         default:true
//     },
//     {
//         type: "confirm",
//         message: "是否能看到我取决于上面是否通过？",
//         name: "pass",
//         suffix: "后缀",
//         when: function(answer) { // 当watch为true的时候才会到达这步
//             return answer.watch//只有我return true才会这个confirm
//         }
//     }
// ]).then(answer=>{
//     console.log(answer);
// });

// 使用箭头选择
// inquirer.prompt([
//     {
//         type:"list",
//         message:"请选择一个选项：",
//         name:"fruit",
//         default:"Apple",
//         prefix:"☆☆☆☆",
//         suffix:"****",
//         choices:[
//             "Apple",
//             "pear",
//             "Banana"
//         ],
//         filter: function (val) { // 使用filter将值变为大写
//             return val.toUpperCase();
//         }
//     }
// ]).then(answer=>{
//     console.log(answer);
// });

// 使用数字选择

// inquirer.prompt([
//     {
//         type:"rawlist",
//         message:"请选择一个选项：",
//         name:"fruit",
//         default:"Apple",
//         prefix:"☆☆☆☆",
//         suffix:"****",
//         choices:[
//             "Apple",
//             "pear",
//             "Banana"
//         ],
//         filter: function (val) { // 使用filter将值变为大写
//             return val.toUpperCase();
//         }
//     }
// ]).then(answer=>{
//     console.log(answer);
// }).catch((err)=>{
//     console.log(err);
// });

//使用简写（自动扩展成全写）
// inquirer.prompt([
//     {
//         type:"expand",
//         message:"请选择一个颜色：",
//         name:"color",
//         default:"red",
//         choices:[
//             {
//                 key : 'R',
//                 value : "red"
//             },
//             {
//                 key : 'B',
//                 value : "blue"
//             },
//             {
//                 key : 'G',
//                 value : "green"
//             }
//         ]
//     }
// ]).then(answer=>{
//     console.log(answer);
// });

// 多选和分隔符
// inquirer.prompt([
//     {
//         type:"checkbox",
//         message:"选择一至多种颜色：",
//         name:"color",
//         choices:[
//             {
//                 name : "red"
//             },
//             new inquirer.Separator(), // 添加分隔符
//             {
//                 name : "blue"
//             },
//             {
//                 name : "green"
//             },
//             {
//                 name : "pink",
//                 checked : true//默认
//             },
//             new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
//             {
//                 name : "orange"
//             }
//         ]
//     }
// ]).then(answer=>{
//     console.log(answer);
// });

// 密码
// inquirer.prompt([
//     {
//         type:"password",
//         message:"请输入你的密码：",
//         name:"pwd"
//     }
// ]).then(answer=>{
//     console.log(answer);
// });

// 输入数字
// inquirer.prompt([
//     {
//         type:"number",
//         message:"请输入数字：",
//         name:"num"
//     }
// ]).then(answer=>{
//     // 非数字 answer为NaN
//     console.log(answer);
// });

// inquirer.prompt([
//     {
//         type:"editor",
//         message:"写下你想写的东西：",
//         name:"editor"
//     }
// ]).then(answer=>{
//     console.log(answer);
// });

// 用来更改显示行数只对list, rawList, expand 或 checkbox有效。
inquirer.prompt([
    {
        type:"checkbox",
        message:"选择一至多种颜色：",
        name:"color",
        choices:[
            "red",
            "blue",
            "green",
            "pink",
            "orange"
        ],
        pageSize:1
    }
]).then(answer=>{
    console.log(answer);
});