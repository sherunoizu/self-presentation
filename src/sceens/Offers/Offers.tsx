import React from 'react';

import { OffersItem } from '../../components';

export const Offers = () => (
  <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Offers</h1>
    <p className='text-center py-8'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti iure ipsam
      perspiciatis nam quae est nesciunt adipisci labore quos animi laborum dolor aperiam
      fuga, repellendus mollitia dolores dignissimos dolorum reprehenderit!
    </p>
    <div className='grid sm:grid-cols-2 gap-12'>
      <OffersItem
        img='https://images.unsplash.com/photo-1518231365576-99dafdedcd69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        title='Individual Route Plan'
      />
      <OffersItem
        img='https://images.unsplash.com/photo-1651488849554-447d25afe8c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        title='Argentina Tour'
      />
      <OffersItem
        img='https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        title='Expedition Training'
      />
      <OffersItem
        img='https://images.unsplash.com/flagged/photo-1551202669-c93b712e7553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        title='US Moutians Tour'
      />
    </div>
  </div>
);
