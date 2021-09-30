import React from 'react';
import { storiesOf } from '@storybook/react';

import {CounterWithCountState} from '../05/05-3-2.withState';

storiesOf("withState", module)
  .addWithJSX("CounterWithCountState", () => <CounterWithCountState />)
