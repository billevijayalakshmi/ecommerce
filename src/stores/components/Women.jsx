import React from 'react'
import { womanData } from '../data/women'
const Women = () => {
    const firstFourImages=womanData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h1>Women Fashion</h1>
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

export default Women