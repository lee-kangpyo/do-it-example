import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/18.Input'

describe('<Input>', () => {
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

});
