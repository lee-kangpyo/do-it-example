import React from 'react'
import ButtonWithLoadingContext from './ButtonWithLoadingContext'
import LoadingProvider from '../LoadingProvider'
import Button from './04/3.Button' // 소비자

function RowBComponent(){
  return <Button>버튼</Button>
}

function RowCComponent(){
  //소비자를 출력한다.
  return <ButtonWithContext>버튼</ButtonWithContext>
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
        <ButtonWithLoadingContext label="상태변경" />
      </LoadingProvider>
    );
  }
}
