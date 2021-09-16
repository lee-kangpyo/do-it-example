import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/18.Input'

describe('<Input> 기본', () => {
  it('크래시 없이 제대로 렌더링 되는지?', () => {      //해당 컴포넌트가, 크래쉬 없이 제대로 렌더링이 되었는지 확인
    expect( () => {
      shallow(<Input name="test_name" />);       // 현재 컴포넌트의 생명주기만 테스트 하는 함수
    }).not.toThrow();           // 컴포넌트의 출력 오류를 출력해줌
  });

  it('한개의 element 를 가지는가?', () => {
    const wrapper = shallow(<Input name="test_name" />)
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });

  it("prop에 할당된 값과 타입", ()=>{
    const expectedValue = "123";
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />)
    expect(wrapper.find("input").prop("value")).toBe(expectedValue);
    const { type, value } = wrapper.find("input").props();
    expect(value).toBe(expectedValue);
    expect(type).toBe("text");
  });

  it("에러 메시지 출력", ()=>{
    const wrapper = shallow(<Input name="test_name" />)
    expect(wrapper.find(".error")).toHaveLength(0);
    const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
    wrapper.setProps({ errorMessage : expectedErrorMessage });
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMessage);
  });

  it("calls back onChange input change", ()=>{
    const changeStub = jest.fn();
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
    expect(changeStub).not.toHaveBeenCalled();
    const expectedTargetValue = 'updated input';
    wrapper.find("input").simulate("change", {target:{value:expectedTargetValue}});
    expect(changeStub).toHaveBeenCalledTimes(1)
    expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
  });

});

describe('<input> 가져야 할 요소', () => {
  it("input, label 태그 1개를 가지고 있는가?", ()=>{
    const wrapper = shallow(<Input name="test_name" />)
    expect(wrapper.find("input")).toHaveLength(1)
    expect(wrapper.find("label")).toHaveLength(1)
  });
})
