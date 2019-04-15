'use strict';

import React from 'react';

const Dots = ({ className }) => <span className={className}>...</span>

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? Dots : 'a';

  const handleClick = !onClick ? null : (e) => {
    e.preventDefault();
    onClick(page);
  }

  return (
    <Component href={href} onClick={handleClick}>
      {page}
    </Component>
  )
}

export default Page;
