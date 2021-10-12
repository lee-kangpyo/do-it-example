import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWithLoadData } from '../05/05-3-3.lifecycle';

storiesOf('lifecycle', module)
  .addWithJSX('loadData 예제', () => (
    <PageWithLoadData loadData={() => fetch('/').then(()=> 'hello')} />
  ));
