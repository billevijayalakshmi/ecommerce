import React from 'react'
import { booksData } from '../data/books'
const Books = () => {
    const firstFourImages=booksData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h1>Books</h1>
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

export default Books