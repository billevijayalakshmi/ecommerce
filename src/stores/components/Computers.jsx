import React from 'react'
import {computerData} from "../data/computers"

const Computers = () => {

    const firstFourImages=computerData.slice(0,5)

  return (
    <>
    <div className='proTitle'>
    <h1>Compuers</h1>
    </div>
    <div className='proSection'>
    {
        firstFourImages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img className="proImage" src={item.image} alt="mobile" />
                </div>
            )

        })
    }
</div>
    </>
  )
}

export default Computers