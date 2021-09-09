import React from 'react'

class StateExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading : true,
      formData:'no data',
    }
    this.handleData = this.handleData.bind(this);
    this.handleData2 = this.handleData2.bind(this);
    // 4초후 handleData 함수 호출됨
    setTimeout(this.handleData2, 4000);
  }

  handleData(){
    const data = "new Data";
    const {formData} = this.state;

    this.setState ({
      loading : false,
      formData : data + formData,
    });
    console.log("loading : " + this.state.loading);
  }
  // 이함수처럼 setState에 함수로 이전 데이터를 가져올수도 있음
  handleData2(){
    const data = "new Data";

    this.setState (function(prevState) {
        const newState = {
          loading : false,
          formData : data + prevState.formData
        }
        return newState;
      }
    );
    console.log("loading : " + this.state.loading);
  }

  render () {
    return(
      <div>
        {/* state 데이터는 this.state로도 접근가능*/}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {String(this.state.formData)}</span>
      </div>
    )
  }
}

export default StateExample;
