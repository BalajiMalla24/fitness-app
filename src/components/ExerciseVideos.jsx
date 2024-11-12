import React from 'react'

const ExerciseVideos = ({exerciseVideos , name}) => {
    return (
        <div className=' bg-[#3f2915] pt-20 px-20 text-gray-300 pb-20'>
            <p className='text-[40px]'>Watch {name} videos</p>
           <div className='flex flex-wrap justify-start gap-[110px] pt-10 '>
           {exerciseVideos?.slice(0,3).map((item , index)=>(
            <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
               target='_blank'
               rel='nonreferrer'
               key={index}
               >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} className='rounded-lg  h-[200px]' />
                <div className='pt-5'>
                    <p className='text-[30px]'> 
                        {item.video.name}
                    </p>
                    <p>
                        {item.video.channelName}
                    </p>
                </div>
            </a>
            
            ))}
           </div>
           
        </div>
    )
}

export default ExerciseVideos
