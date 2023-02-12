import React from 'react';

export const MainNavLinkItem: React.FC<NavLinkItemProps> = ({
  href = '#main',
  IconComponent
}) => (
  <a
    href={href}
    className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
  >
    <IconComponent size={20} />
  </a>
);
