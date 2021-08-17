
// 배열 전개 연산자
console.log("##########배열 전개 연산자")
console.log("#####이전의 방식")

var array1 = ["one", "two"];
var array2 = ["three", "four"];
var combined1 = [array1[0], array1[1], array2[0], array2[1]];
var combined2 = array1.concat(array2);
var combined3 = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || "empty";

function func(){
  var args = Array.prototype.slice.call(arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
  console.log(`args는 ${args} ${first} ${others}`)
  console.log(`첫번째 값은 ${first} 그 이외의 값은 ${others}`)
}

func(1,2,3,4,5)
console.log(`${combined1} || ${combined2} || ${combined3}`)
console.log(`${first} || ${second} || ${three}`)

console.log("#####")
console.log("##### ES6")

var ES6combined = [...array1, ...array2]
const [ ES6first, ES6second, ES6three = "empty", ...others] = array1

function func2 (...args) {
  var [first, ...others] = args
}

console.log(ES6combined)
console.log(`${ES6first}, ${ES6second}, ${ES6three}, ${others}`)

func2 (1, 2, 3, 4, 5,)

// 객체 전개 연산자
console.log("##########객체 전개 연산자")
console.log("#####이전의 방식")
var objectOne = {one:1, two:2, other:0}
var objectTwo = {three:3, four:4, other:-1}
var objectConbined1 = {
  one:objectOne.one,
  two:objectOne.two,
  three:objectTwo.three,
  four:objectTwo.four,
}
var objectConbined2 = Object.assign({}, objectOne, objectTwo);
var objectConbined3 = Object.assign({}, objectTwo, objectOne);
var objectothers = Object.assign({}, objectConbined3);
delete objectothers.other;
console.log(objectConbined1);
console.log(objectConbined2);
console.log(objectConbined3);
console.log(objectothers);

console.log("#####")
console.log("##### ES6 객체 전개 연산자 사용")
var ES6objectConbined1 = {  ...objectOne, ...objectTwo }
var ES6objectConbined2 = {  ...objectTwo, ...objectOne }
var { other, ...ES6others} = ES6objectConbined2
console.log(ES6objectConbined1);
console.log(ES6objectConbined2);
console.log(other);
console.log(ES6others);
