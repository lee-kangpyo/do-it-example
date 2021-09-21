import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/2.Text';
import Button from '../04/3.Button';
import withHoC from '../05/05-2-1.withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('withHoC', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithHoC>안녕하세요</ButtonWithHoC>
      <TextWithHoC>안녕하세요</TextWithHoC>
    </div>
  ))
  .addWithJSX('large 예제', () => (
    <div>
      <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
      <TextWithHoC large>안녕하세요</TextWithHoC>
    </div>
  ));
