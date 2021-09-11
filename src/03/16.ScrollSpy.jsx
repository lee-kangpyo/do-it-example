import React from 'react'
// 페이스북 스크롤 내릴때 자동으로 다음 페이지 목록을 추가할때 사용하는 예제
class ScrollSpy extends React.Component {
  constructor(props){
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }

  setRef(ref) {
    this.ref = ref;
  }

  checkPosition () {
    if(this.ref.getBoundingClientRect().top < window.innerHeight){
      console.log("enter");
    }else {
      console.log("exit");
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkPosition);
    this.checkPosition();
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.checkPosition);
  }


  render () {
    return <div ref={this.setRef} />
  }
}

export default ScrollSpy;
