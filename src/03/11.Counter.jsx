import React from 'react'

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:props.count
    };
    this.increseCount = this.increseCount.bind(this);
  }

  increseCount(){
    this.setState(({ count }) => ({
      count:count+1
    }))
  }

  render () {
    return(
      <div>
        현재 카운트 : {this.state.count}
        <button onClick = {this.increseCount}>카운트증가</button>
      </div>
    )
  }
}

export default Counter;
