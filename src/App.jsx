import React, { Component } from 'react';
//작성된 컴포넌트를 불러들인다.
import TodaysPlan from './03/1.TodaysPlan';
import PropsComponent from './03/2.PropsComponent';
import ChildComponent from './03/3.ChildComponent';
import BooleanComponent from './03/4.BooleanComponent';
import ChildComponent2 from './03/5.ChildComponent2';
import DefaultPropsComponent from './03/6.DefaultPropsComponent';
import ChildProperty from './03/7.ChildProperty';
import StateExample from './03/8.StateExample';
import ForceUpdate from './03/9.ForceUpdateExample';
import LifeCycleExample from './03/10.LifeCycleExample';
import Counter from './03/11.Counter';
import NewCounter from './03/12.newCounter';
import ListExample from './03/13.ListExample';
import TodoList from './03/14.TodoList';
import Counter2 from './03/15.Counter2';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hasDestroyed : false,
      count:10,
    }
    this.resetCount = this.resetCount.bind(this)
  }

  componentDidMount(){
    this.setState({
      hasDestroyed : true,
    })
  }

  resetCount(){
    this.setState(({ count }) => ({count : count + 10}));
  }

  increaseCount() {
    this.setState( ({ count }) => ({ count : count + 1 }) )
  }

  render() {
    return (
      <div className="body">
        <TodaysPlan />ㅇ
        <PropsComponent name = "콤포넌트로 데이터 전달" />
        <ChildComponent
            boolValue={true}
            numValue={1}
            arrayValue={[1, 2, 3]}
            objValue={{name:"제목", age:30}}
            nodeValue={<h1>노드</h1>}
            funcValue={() => {console.log('메시지')} }
          />

        <div>
          <div><b>지루할 때:</b><BooleanComponent bored/></div>
          <div><b>즐거울 때:</b><BooleanComponent /></div>
        </div>

        <ChildComponent2 objValue = {{age:20}} requiredStringValue="문자"/>

        <DefaultPropsComponent />

        <ChildProperty>
          <div><span>자식노드</span></div>
        </ChildProperty>
        <StateExample />
        <ForceUpdate />
        <div>
          {this.state.hasDestroyed ? null : <LifeCycleExample />}
        </div>

        <div>
          <div><Counter count={this.state.count} /></div>
          <div><NewCounter count={this.state.count} /></div>
          <button onClick = {this.resetCount}>{this.state.count + 10}으로 초기화</button>
        </div>

        <ListExample />
        <TodoList />
        <Counter2 count = {this.state.count} onAdd={this.increaseCount.bind(this)} />
      </div>
    );
  }
}

export default App;
