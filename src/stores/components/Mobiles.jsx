import React from 'react'
import { mobileData } from "../data/mobiles"


const Mobiles = () => {
    const firstFourImages=mobileData.slice(0,5);
  return (
    <>
    <div className='proTitle'>
    <h1>Mobiles</h1>
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

export default Mobiles