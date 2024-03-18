import React from 'react'
import { furnitureData } from '../data/furnicher'
const Furnicher = () => {
    const firstFourImages=furnitureData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h1>Futniture</h1>
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

export default Furnicher