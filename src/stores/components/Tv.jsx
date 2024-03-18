import React from 'react'

import { tvData } from '../data/tv'

const Tv = () => {
    const firstFourImages=tvData.slice(0,5)
  return (
    <>
        <div className='proTitle'>
    <h1>TV's</h1>
    </div>
        <div className='proSection'>
            {
                firstFourImages.map((item)=>{
                    return(
                        <div className='imgBox'>
                            <img className="proImage" src={item.image} alt="tv's" />
                        </div>
                    )
    
                })
            }
        </div>
        </>
  )
}

export default Tv