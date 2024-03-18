import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {
    const firstFourImages=kitchenData.slice(0,5)

  return (
    <>
    <div className='proTitle'>
    <h1>Kitchen</h1>
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

export default Kitchen