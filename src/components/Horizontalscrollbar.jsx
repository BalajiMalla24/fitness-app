import React, { useContext } from 'react'
import Bodypart from './Bodypart'
import ExerciseCard from './ExerciseCard'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import left from '../assets/arrow-121-16.png'
import right from '../assets/arrow-19-16.png'

const LeftPrev = () => {
    const { scrollPrev } = useContext(VisibilityContext)   
    return (
        <p onClick={scrollPrev} className="left-arrow"> 
            <img src={left} alt="Scroll Left" />
        </p>
    )
}

const RightPrev = () => {
    const { scrollNext } = useContext(VisibilityContext)   
    return (
        <p onClick={scrollNext} className="right-arrow">
            <img src={right} alt="Scroll Right" />
        </p>
    )
}

const Horizontalscrollbar = ({ data , bodyPart, setBodyPart, bodypartdata }) => {
    return (
        <ScrollMenu LeftArrow={<LeftPrev />} RightArrow={<RightPrev />} className='gap-0'>
   
              { data.map((item, index) => (
                    <div 
                        key={item.id || index}
                        itemId={item.id || index}
                        title={item.id || index}
                        className="mx-20 h-[3/6] my-0"
                    >
                        { bodypartdata? (
                            <Bodypart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                        ) : (
                            <ExerciseCard exercise={item} />
                        )}
                    </div>
                ))
            }   
        </ScrollMenu>
    )
}

export default Horizontalscrollbar
