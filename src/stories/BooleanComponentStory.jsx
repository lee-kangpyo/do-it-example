import React from 'react';
import { storiesOf } from '@storybook/react';

import BooleanComponent from '../03/4.BooleanComponent';

storiesOf('BooleanComponent', module)
  .add('기본설정', () => <BooleanComponent />)
  .add('bored 설정', () => <BooleanComponent bored/>);
