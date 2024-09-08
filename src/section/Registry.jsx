import { Card } from '@mui/material'
import React from 'react'


const registry = () => {
  return (<>
    <div>
      <div className='flex items-center gap-5 mt-5 max-w-7xl m-auto mb-6'>
        <a className='text-[#064F70] text-xl font-bold' href="#">registry & gifting</a>
        <select className='bg-transparent' name="" id="">
          <option value="">Find a registry or gift list</option>
          <option value="">Wedding Registry</option>
          <option value="">Baby Registry</option>
        </select>
        <a href="#">Create a registry or gift list</a>
        <a href="#">Help</a>
      </div>
      <img src="https://m.media-amazon.com/images/G/01/home/awr/2023_Projects/GiftLists/CGL21_A009_OwnerViewHeader_GenderNeutralGifting_421.jpg" alt="" />
      <div className='flex justify-center'>
        <div className='flex flex-col gap-3 py-3 px-9 rounded-xl items-center bg-white absolute top-[400px]'>
          <p className='font-bold text-3xl'>Unwrap joyful possibilities</p>
          <p className='text-xl text-center'>For weddings, babies, birthdays, or any life event, registries and gift lists <br /> ensure the perfect gifts.</p>
          <button className='bg-yellow-400 px-3  py-2 rounded-md'>Create a registry or gift list</button>
        </div>
      </div>

      <div className='mt-48'>
        <div className='bg-[#F4F2F3] py-6  flex items-center gap-6 justify-center'>
          <p className='font-bold text-xl'>Find a registry or gift list</p>
          <input className='pr-20 pl-3 py-2 border border-gray-300 rounded-md' type="search" placeholder='Search by name' />
          <select className='pr-20 pl-3 py-2 border border-gray-300 rounded-md shadow-xl' name="" id="">
            <option value="">Searach by </option>
            <option value="">Searach by </option>
            <option value="">Searach by </option>
          </select>
          <button className='bg-[#0f1111] text-white px-3 py-2 rounded-full'>Search</button>
        </div>
      </div>

      
    </div>
  </>)
}

export default registry