import React from 'react'

class Counter3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
    }
    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increaseCount(){
    this.setState( ({count}) => ({count : count + 1}) )
  }

  resetCount(){
    this.setState( ({count}) => ({count:0}) )
  }

  render () {
    return(
      <div>
        현제 카운트 : {this.state.count}
        <button onClick = {this.increaseCount} onMouseOut = {this.resetCount} >카운트 증가</button>
        버튼 밖으로 커서가 움직이면 0으로 초기화됨.
      </div>
    )
  }
}

export default Counter3;
