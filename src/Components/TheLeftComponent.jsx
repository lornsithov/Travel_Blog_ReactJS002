import React from 'react'
import category from '../Images/category_icon.png'
import cube from '../Images/cube.png'
import list from '../Images/list.png'
import messenger from '../Images/messenger.png'
import success from '../Images/success.png'
import security from '../Images/security.png'
import users from '../Images/users.png'
import raamin from '../Images/raamin.jpg'
import lachlan from '../Images/lachlan.jpg'
import nonamesontheway from '../Images/nonamesontheway.jpg'
import plus from '../Images/plus.png'


export default function TheLeftComponent() {
  return (
    <div className='flex flex-col justify-evenly bg-gray-100 w-40 items-center pr-6 pb-10'>
      <div>
        <img src={category} alt="category" className='w-6' />
      </div>
      <div className='h-h-item flex flex-col justify-evenly'>
        <img src={cube} alt="cube" className='w-6' />
        <div className='relative'>
          <img src={list} alt="list" className='w-6' />
          <div className='w-1 h-1 bg-red-500 rounded-full absolute top-0 right-0'></div>
        </div>
        <div className='relative'>
          <img src={messenger} alt="messenger" className='w-6' />
          <div className='w-1 h-1 bg-red-500 rounded-full absolute top-0 right-0'></div>
        </div>
        <img src={list} alt="list" className='w-6' />
      </div>
      <div className='h-h-item flex flex-col justify-evenly'>
        <img src={success} alt="success" className='w-6' />
        <img src={security} alt="security" className='w-6' />
        <img src={users} alt="users" className='w-6' />
      </div>
      <div className='h-h-item flex flex-col justify-evenly items-center'>
        <img src={lachlan} alt="lachlan" className='rounded-full w-8 h-8'/>
        <img src={raamin} alt="raamin" className='rounded-full w-8 h-8'/>            
        <img src={nonamesontheway} alt="nonamesontheway" className='rounded-full w-8 h-8'/>
        <img src={plus} alt="plus" className='w-6' />
      </div>
    </div>
  )
}
