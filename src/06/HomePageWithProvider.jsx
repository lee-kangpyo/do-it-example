import React, { PureComponent } from 'react';
import LoadingProvider from './LoadingProvider';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import Button from '../04/3.Button' // 소비자

function RowBComponent(){
  return <Button>버튼</Button>
}

function RowCComponent(){
  //소비자를 출력한다.
  //return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>
  return <ButtonWithLoadingContext label="버튼" />;
}

function TableComponent(){
  return(
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  )
}

class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext label="상태 변경" />
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;
