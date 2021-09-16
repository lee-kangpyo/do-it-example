import React from 'react';
import { shallow, mount } from 'enzyme';

import Text from '../../04/2.Text';

describe('Text', ()=>{
  it('충돌없이 제대로 실행되는가?', () => {
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow()
  });

  it('span 태그를 가지고 있는가?(mount)', () => {
    expect(mount(<Text>테스트</Text>).find("span")).toHaveLength(1);
  });

  it('span 태그를 가지고 있는가?(dive)', () => {
    expect( shallow(<Text>테스트</Text>).dive().find("span") ).toHaveLength(0);
  });

});
