'use strict';

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Pagination from './index';

const stories = storiesOf('<Pagination />', module);

stories.add('Without props', () => (
  <Pagination total={20} pageLink="https://mysite.com/page/%page%" />
))