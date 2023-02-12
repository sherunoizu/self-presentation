import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

import { SideNavLinkItem, MainNavLinkItem } from '../../components';

const _SECTIONS: NavLinkItemProps[] = [
  { sectionName: 'Home', IconComponent: AiOutlineHome, href: '#main' },
  { sectionName: 'Work', IconComponent: GrProjects, href: '#work' },
  { sectionName: 'Projects', IconComponent: AiOutlineProject, href: '#projects' },
  { sectionName: 'Resume', IconComponent: BsPerson, href: '#main' },
  { sectionName: 'Contact', IconComponent: AiOutlineMail, href: '#contact' }
];

export const SideNav = () => {
  const [nav, setNav] = useState(false);

  const onNavClickHandler = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={onNavClickHandler}
        className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          {_SECTIONS.map((section) => (
            <SideNavLinkItem
              href={section.href}
              sectionName={section.sectionName}
              IconComponent={section.IconComponent}
            />
          ))}
        </div>
      ) : (
        ''
      )}

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          {_SECTIONS.map((section) => (
            <MainNavLinkItem href={section.href} IconComponent={section.IconComponent} />
          ))}
        </div>
      </div>
    </div>
  );
};
