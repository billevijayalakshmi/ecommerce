import React from 'react'
import { menData } from '../data/men'
const Men = () => {
    const firstFourImages=menData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h1>Men's Fashion</h1>
    </div>
    
    <div className='proSection'>
        {
            firstFourImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className="proImage" src={item.image} alt="" />
                    </div>
                )

            })
        }
    </div>
    </>
  )
}

export default Men