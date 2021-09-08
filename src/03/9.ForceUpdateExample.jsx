import React from 'react'
import PropTypes from 'prop-types'

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);

    //생성자에서 변수 초기화
    this.loading = true;
    this.formData = 'no data';

    //아직 안배움
    this.handleData = this.handleData.bind(this);
    // 4초 뒤에 함수 호출
    setTimeout(this.handleData, 4000);
  }

  handleData(){
    const data = 'new data';
    this.loading = false;
    this.formData = data + this.formData;
    //setState말고 강제 업데이트 함수 실행
    this.forceUpdate();
  }

  render () {
    return(
      <div>
        {/* state 데이터는 this.state로도 접근가능*/}
        <span>로딩중: {String(this.loading)}</span>
        <span>결과: {String(this.formData)}</span>
      </div>
    )
  }
}

export default ForceUpdateExample;
