var fs = require("fs");
const path = require("path");
const  file =  path.join(__dirname,'events.js')

// // 读写文件路径要用绝对路劲，相对路径有坑,在不同目录下执行可以找不到文件
// // 异步读取
// fs.readFile(file, function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("异步读取: " + data.toString());
// });

// // 同步读取
// var data = fs.readFileSync(file);
// console.log("同步读取: " + data.toString());

// console.log("程序执行完毕。");


// // 异步打开文件
// console.log("准备打开文件！");
// fs.open(file, 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//   console.log("文件打开成功！");     
// });


// console.log("准备打开文件！");
// fs.stat(file, function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("读取文件信息成功！");
   
//    // 检测文件类型
//    console.log("是否为文件(isFile) ? " + stats.isFile());
//    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
// });


// console.log("准备写入文件");
// fs.writeFile(path.join(__dirname,'statics/write.txt'), '我是通 过fs.writeFile 写入文件的内容',  function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("数据写入成功！");
//    console.log("--------我是分割线-------------")
//    console.log("读取写入的数据！");
//    fs.readFile(file, function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("异步读取文件数据: " + data.toString());
//    });
// });


// console.log("准备打开已存在的文件！");
// var buf = new Buffer.alloc(1024);
// fs.open(path.join(__dirname,'http.js'), 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("准备读取文件：");
//    fs.read(fd, buf, 0, 50, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + "  字节被读取");
      
//       // 仅输出读取的字节
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//    });
// });


// console.log("准备打开文件！");
// fs.open(file, 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("准备读取文件！");
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }

//       // 仅输出读取的字节
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }

//       // 关闭文件
//       fs.close(fd, function(err){
//          if (err){
//             console.log(err);
//          } 
//          console.log("文件关闭成功");
//       });
//    });
// });


// var buft = new Buffer.alloc(1024);

// console.log("准备打开文件！");
// fs.open(path.join(__dirname,'statics/openFile.txt'), 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("截取10字节内的文件内容，超出部分将被去除。");
   
//    // 截取文件
//    fs.ftruncate(fd, 10, function(err){
//       if (err){
//          console.log(err);
//       } 
//       console.log("文件截取成功。");
//       console.log("读取相同的文件"); 
//       fs.read(fd, buft, 0, buft.length, 0, function(err, bytes){
//          if (err){
//             console.log(err);
//          }

//          // 仅输出读取的字节
//          if(bytes > 0){
//             console.log(buft.slice(0, bytes).toString());
//          }

//          // 关闭文件
//          fs.close(fd, function(err){
//             if (err){
//                console.log(err);
//             } 
//             console.log("文件关闭成功！");
//          });
//       });
//    });
// });



// console.log("准备删除文件！");
// fs.unlink(path.join(__dirname,'statics/write.txt'), function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件删除成功！");
// });


// // tmp 目录必须存在
// console.log("创建目录 /tmp/test/");
// fs.mkdir(path.join(__dirname,'statics/test'),function(err){
//    if (err) {
//        return console.error(err);
//    }
//    console.log("目录创建成功。");
// });


// fs.mkdir(path.join(__dirname,'statics/test'), { recursive: true }, (err) => {
//     if (err) throw err;
//   });

  console.log("查看 /tmp 目录");
fs.readdir(path.join(__dirname,'statics'),function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});

fs.truncate(path.join(__dirname,'statics/openFile.txt'), 5, function(err){
})