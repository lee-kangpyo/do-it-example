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


})
