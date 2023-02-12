import React from 'react';

export const SideNavLinkItem: React.FC<NavLinkItemProps> = ({
  href = '#main',
  sectionName,
  IconComponent
}) => (
  <a
    href={href}
    className='
      w-[75%] flex justify-center items-center
      rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4
      cursor-pointer hover:scale-110 ease-in duration-200'
  >
    <IconComponent size={20} />
    <span className='pl-4'>{sectionName}</span>
  </a>
);
