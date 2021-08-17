var string1 = "안녕하세요.";
var string2 = "반갑습니다.";
var greeting = string1 + ' ' + string2;
var product = {name:"도서", price:"400원"};
var message = "제품" + product.name + "의 가격은" + product.price + "입니다.";
var multiLine = "문자열1\n문자열2";
var value1 = 12;
var value2 = 2;
var bolValue = false;
var operator1 = "곱셈값은 " + (value1 * value2) + "입니다."
var operator2 = "불리언 값은 " + (bolValue? "참":"거짓") + "입니다.";

log("기존의 방식");
splitlog()

greeting = `${string1} ${string2}`;
message = `제품 ${product.name}의 가격은 ${product.price}입니다.`;
multiLine = `문자열1
문자열2`;
operator1 = `곱셈값은 ${value1 * value2}입니다.`;
operator2 = `불리언 값은 ${bolValue ? "참":"거짓"}입니다.`;

log("ES6");
splitlog("연습문제");
// 다음은 병합연산자로 표현된 코드입니다. 템플릿 문자열을 적용하여 바꿔보세요
var cart = {name:"도서", price:"1500"}
var getTotal = function(cart){
  return cart.price + "원";
}
var myCart = "장바구니에 " + cart.name + "가 있습니다. 총금액은 " + getTotal(cart) + " 입니다."
var result = `장바구니에 ${cart.name}가 있습니다. 총금액은 ${getTotal(cart)} 입니다.`
console.log(myCart)
console.log(result)




function splitlog(str){
  console.log("###########");
  if (str) console.log(`########### ${str}`);
}
function log(str){
  console.log(`########### ${str}`);
  console.log(string1);
  console.log(string2);
  console.log(greeting);
  console.log(product);
  console.log(message);
  console.log(multiLine);
  console.log(value1);
  console.log(value2);
  console.log(bolValue);
  console.log(operator1);
  console.log(operator2);
}
