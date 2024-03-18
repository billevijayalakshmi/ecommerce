import React,{useState} from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
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
        mobileData : mobileData.filter((orange)=>selctedProduct.includes(orange.company))
  return (
   <>
   <Navbar/>

  <div className="fullpage"> 
  <div className="pro-selected">
    {mobileData.map((phone)=>{
        return(
            <div className='pro-input'> 
                <label>
                    <input type="checkbox" 
                    checked={selctedProduct.includes(phone.company)}
                    onChange={()=>companyHandler(phone.company)}/>
                    {phone.company}
                </label>
            </div>
        )
    })}
   </div>
    <div className='pageSection'>
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/mobile/${item.id}`}>
                    <div className="pageImage">
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
            
        })}

    </div>
    </div>
   </>
  )
}

export default MobilePage