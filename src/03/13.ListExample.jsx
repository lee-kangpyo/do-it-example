import React from 'react'

class ListExample extends React.Component {
  render () {
    const priceList = [1000, 2000, 3000, 4000, 5000];
    return(
      <div>
        <label>가격 목록(13.리스트예제)</label>
        {priceList.map((price, i) => (<div>가격 : {price}원</div>))}
      </div>
    )
  }
}

export default ListExample;
