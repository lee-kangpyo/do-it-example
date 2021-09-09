import React from 'react'

class LifeCycleExample extends React.Component {
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps 호출");
    return {};
  }

  constructor(props){
    super(props);
    this.state = {};
    console.log("constructor 호출");
  }

  componentDidMount(){
    console.log("componentDidMount 호출");
    this.setState({
      updated:true,
    })
    //this.forceUpdate();
  }

  componentDidUpdate(){
    console.log("componentDidUpdate 호출");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount 호출");
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate 호출");
    return {}
  }

  shouldComponentUpdate(){
    //return 값에 따라서 변경 사항이 없다고 간주하고 변경과정의 생명 주기 함수가 실행되지 않는다.
    console.log("shouldComponentUpdate 호출");
    return true;
  }

  render () {
    console.log("render 호출");
    return null;
  }
}

export default LifeCycleExample;
