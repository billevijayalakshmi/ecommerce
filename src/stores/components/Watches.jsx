import React from 'react'
import { watchData } from '../data/watches'

const Watches = () => {
    const firstFourImages=watchData.slice(0,5)
    return (
        <>
        <div className='proTitle'>
    <h1>Watches</h1>
    </div>
        <div className='proSection'>
            {
                firstFourImages.map((item)=>{
                    return(
                        <div className='imgBox'>
                            <img className="proImage" src={item.image} alt="watches" />
                        </div>
                    )
    
                })
            }
        </div>
        </>
      )
}

export default Watches