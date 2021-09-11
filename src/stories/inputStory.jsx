import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../03/18.Input';
import NewCounter from '../03/12.newCounter';

storiesOf('Input', module)
  .add('기본 설정', () => <Input name="name" />)
  .add('라벨 예제', () => <Input name="name" label="이름" />);

storiesOf('newCounter', module).add('기본설정', () => <NewCounter count={0} />);
