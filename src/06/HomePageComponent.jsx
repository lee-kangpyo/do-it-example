import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../04/3.Button'
import ButtonWithContext from './ButtonWithContext'; // 소비자

function RowBComponent(){
  return <Button>버튼</Button>;
}

function RowCComponent(){
  //소비자를 출력한다.
  return <ButtonWithContext>버튼</ButtonWithContext>;
}

function TableComponent(){
  return(
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageComponent extends PureComponent {
  constructor(props){
    super(props);

    this.state = {loading: false}
    this.setLoading = this.setLoading.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  // 소비자는 이함수를 통해 loading과 setLoading을 전달받는다.
  getChildContext(){
    return{
      loading:this.state.loading,
      setLoading:this.setLoading,
    };
  }

  setLoading(loading){
    this.setState( { loading } )
  }

  toggleLoading(){
    this.setState(({ loading }) => ({ loading : !loading }));
  }

  render() {
    return (
      <div>
        <TableComponent />
        <Button onPress={this.toggleLoading}>상태 변경</Button>
      </div>
    );
  }
}

//컨텍스트의 자료형 정의
HomePageComponent.childContextTypes = {
  loading:PropTypes.bool,
  setLoading:PropTypes.func,
}

export default HomePageComponent;
