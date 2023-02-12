import React from 'react';
import { WorkItem } from '../../components';

const _DATA: WorkItemProps[] = [
  {
    year: 2020,
    title: 'Travel instructor',
    duration: '3 Years',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum numquam facere at iure fugit sequi atque modi libero dolorem, qui nemo, eaque nulla, tempore labore obcaecati. Autem molestiae incidunt nostrum.'
  },
  {
    year: 2017,
    title: 'Personal Travel Designer',
    duration: '3 Years',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum numquam facere at iure fugit sequi atque modi libero dolorem, qui nemo, eaque nulla, tempore labore obcaecati. Autem molestiae incidunt nostrum.'
  },
  {
    year: 2015,
    title: 'Travel instructor',
    duration: '2 Years',
    details:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum numquam facere at iure fugit sequi atque modi libero dolorem, qui nemo, eaque nulla, tempore labore obcaecati. Autem molestiae incidunt nostrum.'
  }
];

export const WorkExp = () => (
  <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work Experience</h1>
    {_DATA.map((item, id) => (
      <WorkItem
        key={id}
        year={item.year}
        title={item.title}
        duration={item.duration}
        details={item.details}
      />
    ))}
  </div>
);
