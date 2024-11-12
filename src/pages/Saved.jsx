import React from 'react'

const Saved = () => {
    return (
        <div className=' w-full bg-[#3f2915]'>
            <div className='flex justify-center items-start pt-11 h-screen'>
                <div className='w-4/6 h-4/6 border border-gray-300 rounded-lg'>
                    <div className='flex items-center justify-between h-20 px-8 border-b'>
                      <h1 className='text-gray-300 text-[20px]'>Saved exercises</h1>
                      <button className='bg-gray-300 p-3 rounded-lg text-[#3f2915]'>
                        Empty
                      </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saved
