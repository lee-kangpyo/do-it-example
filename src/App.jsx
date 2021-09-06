import React, { Component } from 'react';
//작성된 컴포넌트를 불러들인다.
import TodaysPlan from './03/1.TodaysPlan';
import PropsComponent from './03/2.PropsComponent';
import ChildComponent from './03/3.ChildComponent'

class App extends Component {
  render() {
    return (
      <div className="body">
        <TodaysPlan />
        <PropsComponent name = "콤포넌트로 데이터 전달" />
        <ChildComponent
            boolValue={true}
            numValue={1}
            arrayValue={[1, 2, 3]}
            objValue={{name:"제목", age:30}}
            nodeValue={<h1>노드</h1>}
            funcValue={() => {console.log('메시지')} }
          />
      </div>
    );
  }
}

export default App;
