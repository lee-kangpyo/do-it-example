import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/3.Button';

storiesOf('Button', module)
  .addWithJSX('기본 설정', () => <Button>전송하기</Button>)
