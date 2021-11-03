import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageComponent from '../06/HomePageComponent';
import HomePageWithProvider from '../06/HomePageWithProvider';

storiesOf('HomePageComponent', module)
  .add('컨텍스트 예제', () => <HomePageComponent />)
  .add('provider 예제', () => <HomePageWithProvider/>);
