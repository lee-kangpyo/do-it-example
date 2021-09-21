const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyx = x => a => multiply(a, x);
const addx = x => a => add(x, a);

const addFour = addx(4);
const multiplyTwo = multiplyx(2);
const multiplyThree = multiplyx(3);


function compose(){
  //1. 나열형 인자로 함수 구조 유연하게 만들기
  const funcArr = Array.prototype.slice.call(arguments);
  return funcArr.reduce(
    function(prev, next){
      return function(){
        // 2. 하나의 실행인자 value를 다중인자로 사용가능하게 하기
        const args = Array.prototype.slice.call(arguments);
        return next( prev.apply(null, args) );
      }
    },
    function(k) {return k}
  );
}

//전개연산자로 변경
function compose2(...funcArr){
  return funcArr.reduce(
    function(prev, next){
      return function(...args){
        return next( prev(...args) );
      }
    },
    function(k) {return k}
  );
}

const formularWithCompose = compose2(multiplyTwo, multiplyThree, addFour);
console.log(formularWithCompose(3));
