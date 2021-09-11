import React from 'react';
import { storiesOf } from '@storybook/react';

import NewCounter from '../03/12.newCounter';

storiesOf('newCounter', module).add('기본설정', () => <NewCounter count={0} />);
