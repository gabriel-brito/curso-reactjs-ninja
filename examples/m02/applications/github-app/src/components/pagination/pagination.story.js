'use strict';

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Pagination from './index';

const stories = storiesOf('<Pagination />', module);

stories.add('Without props', () => (
  <Pagination />
))

stories.add('With pageLink', () => (
  <Pagination 
    total={20} 
    activePage={5} 
    pageLink='https://mysite.com/page/%page%'
  />
))

stories.add('With callback', () => (
  <Pagination 
    total={20} 
    activePage={5} 
    pageLink='https://mysite.com/page/%page%'
    onClick={(page) => {alert(page)}}
  />
))