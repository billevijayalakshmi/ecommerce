import React from 'react'

import { acData } from '../data/ac'

const Ac = () => {
    const firstFourImages=acData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h1>AC's</h1>
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

export default Ac