<<<<<<< HEAD
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
=======
'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with total and activePage', () => (
  <Pagination total={10} activePage={5} />
))

stories.add('with page link', () => (
  <Pagination total={3} activePage={1} pageLink='http://mypage.com/page/%page%' />
))

stories.add('with callback', () => (
  <Pagination total={15} activePage={7} pageLink='http://mypage.com/page/%page%' onClick={(page) => {
    window.alert(page)
  }} />
))
>>>>>>> a5ee6a796a5699069be6811e25c4bf7c05f3d147
