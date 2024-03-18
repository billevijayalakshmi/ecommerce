import React,{useState} from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const TvPage = () => {
    const [selctedProduct,setSelectedProduct]= useState([])
    const companyHandler=(mango)=>{
        if(selctedProduct.includes(mango)){
            setSelectedProduct(selctedProduct.filter(item=>item!==mango))
        }
        else{
            setSelectedProduct([...selctedProduct,mango])
        }
    }
    const filteredProduct = selctedProduct.length===0?
        tvData : tvData.filter((orange)=>selctedProduct.includes(orange.company))
  return (
   <>
   <Navbar/>

  <div className="fullpage"> 
  <div className="pro-selected">
    {tvData.map((phone)=>{
        return(
            <div className='pro-input'> 
                <label>
                    <input type="checkbox" 
                    checked={selctedProduct.includes(phone.brand)}
                    onChange={()=>companyHandler(phone.brand)}/>
                    {phone.brand}
                </label>
            </div>
        )
    })}
   </div>
    <div className='pageSection'>
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/tv/${item.id}`}>
                    <div className="pageImage">
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    
                    <div className="proModel">
                        {item.brand},{item.model}
                    </div>
                </div>
            )
            
        })}

    </div>
    </div>
   </>
  )
}


export default TvPage