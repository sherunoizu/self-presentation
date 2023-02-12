import React from 'react';

export const Form = () => (
  <form
    action='https://getform.io/f/155ed208-754c-4bb6-ac5b-b97eae4e3199'
    method='POST'
    encType='multipart/form-data'
  >
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
      <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Name</label>
        <input
          className='border-2 rounded-lg p-3 flex border-gray-300'
          type='text'
          name='name'
        />
      </div>
      <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Phone Number</label>
        <input
          className='border-2 rounded-lg p-3 flex border-gray-300'
          type='text'
          name='phone'
        />
      </div>
    </div>
    <div className='flex flex-col py-2'>
      <label className='uppercase text-sm py-2'>Email</label>
      <input
        className='border-2 rounded-lg p-3 flex border-gray-300'
        type='email'
        name='email'
      />
    </div>
    <div className='flex flex-col py-2'>
      <label className='uppercase text-sm py-2'>Subject</label>
      <input
        className='border-2 rounded-lg p-3 flex border-gray-300'
        type='text'
        name='subject'
      />
    </div>
    <div className='flex flex-col py-2'>
      <label className='uppercase text-sm py-2'>Message</label>
      <textarea
        className='border-2 rounded-lg p-3 border-gray-300 resize-none'
        rows={10}
        name='message'
      />
    </div>
    <button className='bg-[#001b5e] text-gray-100 nt-4 w-full p-4 rounded-lg'>
      Send Message
    </button>
  </form>
);
