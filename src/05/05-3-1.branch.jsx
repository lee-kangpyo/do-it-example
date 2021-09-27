import React from 'react'
import branch from 'recompose/branch'
import Button from '../04/3.Button'
/*
function isLoading (props) {
  return props.isLoading
}

function LoadingButton (props) {
  return <Button disabled>로딩중</Button>
}

export default branch(
  isLoading,
  () => LoadingButton,
)(Button);
*/
// 위의 주석을 아래처럼 표현할수도 있다.
// branch() 안에는 함수를 전달하면 알아서 조건에 따라 실행해주는듯하다.
// branch(함수, 함수, 함수)
// 1번째 함수가 bool 값을 리턴하면 true이면 2번째 함수를 false이면 3번째 함수를 호출
export default branch(
  ({isLoading}) => isLoading,
  () => () => <Button disabled>로딩중</Button>
)(Button);
