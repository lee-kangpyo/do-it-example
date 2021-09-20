function multiply(a, b){
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

function multiplyx (x) {
  return function (a){
    return multiply(a, x)
  }
}

// 화살표 함수 표현식
let multiplyx2 = x => a => multiply(a, x);

//첫번째 함수
let multiplyThree = multiplyx(3);
let multiplyFour = multiplyx2(4);
//두번째 함수
let result1 = multiplyThree(3);
let result2 = multiplyFour(4);
console.log(result1);
console.log(result2);

//중간 과정 생략
let result3 = multiplyx(3)(3);
let result4 = multiplyx2(4)(4);
console.log(result3);
console.log(result4);

console.log("커링 한 번 더 사용해보기")

// => ((x * a) * b) +c
// a=2, b=3, c=4
let equation = (a, b, c) => x => ((x * a) * b) +c;
let fomular =  equation(2, 3, 4);
let x = 10;
let result = fomular(x);
console.log(result);

console.log("커링 응용하기")

multiply = (a, b) => a * b;
let add = (a, b) => a + b;

multiplyx = x => a => multiply(a, x);
let addx = x => a => add(x, a);

let addFour = addx(4);
multiplyTwo = multiplyx(2);
multiplyThree = multiplyx(3);

formular = x => addFour(multiplyThree(multiplyTwo(x)));
console.log(formular(3))
