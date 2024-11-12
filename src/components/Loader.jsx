import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div>
            <InfinitySpin className='text-gray-300 flex items-center justify-center'/>
        </div>
    )
}

export default Loader
