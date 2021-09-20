const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyx = x => a => multiply(a, x);
const addx = x => a => add(x, a);

const addFour = addx(4);
const multiplyTwo = multiplyx(2);
const multiplyThree = multiplyx(3);

// 아래와 같은 식은 함수가 실행되는 순서가 오른쪽에서 왼쪽으로 사용자가 한번에 이해하기 어렵다.

const formular = x => addFour(multiplyThree(multiplyTwo(x)));

// #### reduce 예시
// [1, 2, 3].reduce(function(prev, next){return prev + next})
// 1 -> prev = 0 next = 1
// 2 -> prev = 1 next = 2
// 3 -> prev = 3 next = 3 ---> 6을 리턴함.
// [1, 2, 3].reduce(function(prev, next){return prev + next}, 5)
// 1 -> prev = 5 next = 1
// 2 -> prev = 6 next = 2
// .... 생략 ....
// ---> 11을 리턴함.
console.log([1, 2, 3].reduce(function(prev, next){return prev + next}, 5))

const test2 = [1, 2, 3].reduce(
  function(prev, next){
    return function(value){
      console.log(value)
      return prev + next
    }
  },
  function(k){return k}
)
console.log(test2(5))

const test = [multiplyTwo, multiplyThree, addFour].reduce( // 실행순서가 배열의 0, 1, 2로 사용자가 한눈에 이해할수 있다.
  function(prev, next){
    return function(value){
      console.log("value : "+value);
      console.log(next(prev(value)))

      return next(prev(value));
    }
  },
  function(k) { return k; } // k는 초기 prev 값
)
console.log("####");
console.log(test(3))
console.log("####");

function compose(funcArr){
  return funcArr.reduce(
    function(prev, next){
      return function(value){
        return next(prev(value));
      }
    },
    function(k) {return k}
  );
}

const formularWithCompose = compose([multiplyTwo, multiplyThree, addFour]);
console.log(formularWithCompose(3));
