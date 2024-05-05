import React from 'react'
import list from '../../public/list.json';
import Card from './Card';
import Navbar from './Navbar';

function Course() {
  return (
    <>
    <Navbar/>
    <div className='max-w-screen-2xl pb-6 container mx-auto  md:px-20 px-4 dark:bg-slate-800 dark:text-white'>
        <div>
        <h1 className='text-2xl md:text-4xl justify-center text-center items-center mb-10 pt-10'>We're delighted to have you <span className='text-pink-600'>here:)</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae magni eligendi mollitia beatae adipisci culpa numquam fugiat corporis cum eius? it, amet consectetur adipisicing elit. Repudiandae magni eligendi mollitia beatae adipisci culpa numquam fugiat corporis cum eius?</p>
        <div className=' flex justify-center items-center my-10'>
        <button className='bg-pink-600 text-white px-2 py-1 rounded-md hover:bg-pink-700 duration-200  '>Back</button>

        </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4'>
            {list.map((e)=>(
                <Card key={e.id} title={e.title} name={e.name} price={e.price } category={e.category} />
            ))}
        </div>
    </div>
    </>
  )
}

export default Course