import React from 'react';
import {shallow} from 'enzyme';

import CheckBox from '../../04/4.CheckBox';

describe('<CheckBox>', ()=>{
  it('제대로 실행되는가?', ()=>{
    expect(()=>{
        shallow(<CheckBox name="test_name">테스트</CheckBox>).not.toThrow();
    })
  })

  it('에러 메시지가 출력되는가?', ()=>{
    const errmsg = "오류 메시지";
    const errorHtml = shallow(<CheckBox name="name" errorMessage={errmsg}>테스트</CheckBox>).dive().dive().find("span").html();
    expect(errorHtml).toContain(errmsg);
  })

  it('클릭에 의해 onChange 호출됨', ()=>{
    //생성한 가상 함수가 한번도 호출되지 않음을 검증
    const changeStub = jest.fn();
    expect(changeStub).toHaveBeenCalledTimes(0);
    // input element가 있는지 확인
    const input = shallow(<CheckBox name="test_name" onChange={changeStub}>테스트</CheckBox>).dive().dive().find("input")
    expect(input).toHaveLength(1);
    //클릭 이벤트 호출후 onChange 함수가 호출되었는지를 검증
    input.simulate("click", {target:{checked:true}});
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('test_name', true);

    input.simulate("click", {target:{checked:false}});
    expect(changeStub).toHaveBeenCalledWith('test_name', false);


  })
})
