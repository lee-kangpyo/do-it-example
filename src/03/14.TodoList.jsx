import React from 'react'

class TodoList extends React.Component {
  render () {
    const todoList = [
      { taskName:"빨래하기", finished : false },
      { taskName:"공부하기", finished : true },
    ];
    return(
      <div>
        // 리스트의 경우는 키값으로 재사용을 함. 인덱스 번호로 키값을 사용하게되면 문제가 발생할수있으니 고유의 키값을 넣어준다.
        {todoList.map( (todo) => <div key = {todo.taskName}>{todo.taskName}</div>)}
      </div>
    )
  }
}

export default TodoList;
