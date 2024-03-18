import React from 'react'
import { fridgeData } from '../data/fridge'
const Fridge = () => {
    const firstFourImages=fridgeData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h1>Fridgs</h1>
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

export default Fridge