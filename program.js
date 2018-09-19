var argvs = process.argv;
var dataArr = argvs.slice(2, argvs.length);
var sum = 0;
for (var i = 0;i < dataArr.length;i++) {
 sum += Number(dataArr[i]);	
}
console.log(sum)
