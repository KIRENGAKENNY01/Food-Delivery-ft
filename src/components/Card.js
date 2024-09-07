//  import necessary requirements 

import React, {useRef,useState} from 'react'
import Confirm from './Confirm'


import waffleImage from '../images/image-waffle-mobile.jpg'
import Creme from '../images/image-creme-brulee-mobile.jpg'
import Macaron from '../images/image-macaron-mobile.jpg'
import Tiramisu from '../images/image-tiramisu-mobile.jpg'
import Baklava from '../images/image-baklava-mobile.jpg'
import Cake from '../images/image-cake-mobile.jpg'
import Brownie from '../images/image-brownie-mobile.jpg'
import PannaCotta from '../images/image-panna-cotta-mobile.jpg'
import Pie from "../images/image-meringue-mobile.jpg"
import empyty from "../images/illustration-empty-cart.svg"
import plus from "../images/minus.png"
import minus from "../images/plus.png"
import AddToCart from '../images/icon-add-to-cart.svg'
import remove from '../images/icon-remove-item.svg'
import neutral from '../images/icon-carbon-neutral.svg'



const Card = () => {
  // array of products and their description like images and price
  const Productlist=[
    { productID:1,  productName:'Waffle', productDescription:'Waffle with Berries', price:'$6.50',productImage:waffleImage, productAlt:"waffles" },
    { productID:2,   productName:'Creme Brulee', productDescription:'Vanilla Bean Creme Brulee', price:'$7.00', productImage:Creme, productAlt:"Creme Brulee"},
    { productID:3,   productName:'Macaron', productDescription:'Macaron Fix of Five', price:'$7.00', productImage:Macaron, productAlt:"macaron"},
    { productID:4,   productName:'Tiramisu', productDescription:'Classic Tiramisu', price:'$5.50', productImage:Tiramisu, productAlt:"Tiramisu"},
    { productID:5,   productName:'Baklava', productDescription:'Pistachio Baklava', price:'$4.00', productImage:Baklava, productAlt:"Baklava"},
    { productID:6,   productName:'Pie', productDescription:'Lemon Meringue Pie', price:'$5.00', productImage:Pie, productAlt:"Pie"},
    { productID:7,   productName:'Cake', productDescription:'Red Velvet Cake', price:'$4.50', productImage:Cake, productAlt:"cake"},
    { productID:8,   productName:'Brownie', productDescription:'Salted Caramel Brownie', price:'$5.50', productImage:Brownie, productAlt:"brownie"},
    { productID:9,   productName:'Panna Cotta', productDescription:'Vanilla Panna Cotta', price:'$6.50', productImage:PannaCotta, productAlt:"Panna-Cotta"}
  ]
  const orderList=[
    {orderID:1, name:'Classic Tiramisu', times:'1x', price:'@$5.50',totalPrice:'$5.50'},
    {orderID:2,name:'Vanilla Bean Creme Brulee',times:'4x',price:'@$7.00',totalPrice:'$28.00'},
    {orderID:3,name:'Vanilla Panna Cotta',times:'2x',price:'@$6.50',totalPrice:'$13.00'}
  ]
  
  //javascript logic 
  const imageRef=useRef(null)
  const buttonRef=useRef(null)
  // making the button go on the image and outside of the image by controlling the load time 
  const handleLoadTime= ()=>{
   const imageHeight=imageRef.current.clientHeight
   const buttonTop=imageHeight - 15
    buttonRef.current.style.top=`${buttonTop} px`
  }
  const [isSelected,setIsSelected]=useState(null)
  const [isUpdated,setIsUpdated]=useState(false)
  const [isConfirmed,setIsConfirmed]=useState(false)
  const handleClick=(itemID)=>{
    if(isSelected===itemID){
      setIsSelected(null)
      setIsUpdated(false)
    }else{
      setIsSelected(itemID)
      setIsUpdated(true)
    }
    const handleTimes= ()=>{
      if(isSelected===itemID){

      }

      } 
}





    return (
    <div className="bg-Rose-50">
         
      <h1 className="font-bold  ss:text-[30px] mt-5 text-center lg:text-left font-size-[50px] lg:ml-20 ">Desserts</h1>
        
          <div className='lg:flex justify-around'>
            
              <div className='lg:flex flex-wrap justify-content-between gap-4 max-w-[70%]'>
                {Productlist.map(product =>(
                  <div key={product.productID} className="ss:w-[90%] mx-auto mt-14 mb-2  lg:max-w-[30%] flex flex-col">
                    {isSelected===product.productID? (
                          <div>
                            <img src={product.productImage} alt={product.productAlt} className={`rounded-lg  w-full border-2 border-red`} ref={imageRef} />
                                                  <button className={` button border shadow-custom bg-red  rounded-full flex flex-row justify-around relative px-7 py-3 ss:w-[70%] mx-auto   sm:w-[34%] mx-auto lg:w-[70%] mx-auto top-[-10%] ${isSelected===product.productID? "bg-red":""} `} ref={buttonRef} onLoad={handleLoadTime} onClick={()=>handleClick(product.productID)}>
                                                  <img src={plus} alt="plus icon" className=' hover:bg-white' />
                                                    <span className='text-white'>{product.productID}</span>
                                                    <img src={minus} alt="minuse icon"  className=' hover:bg-white'/>
                                                    {}
                                               </button>
                                               <p className="text-gray-500 font-size-[16px] ">{product.productName}</p>
                                                    <p className="font-bold">{product.productDescription}</p>
                                                    <p className="font-weight-[600] text-red ">{product.price}</p>
                          </div>
                        
                        
                    ):(
                      <div className='lg:flex'>
                         <div className='flex flex-col items-start'>
                           <img src={product.productImage} alt={product.productAlt} className={`rounded-lg  w-full ${isSelected===product.productID?"border-2 border-red":""}`} ref={imageRef} />
                                                 <button className={` button border shadow-custom bg-Rose-100  rounded-full flex flex-row justify-around relative px-7 py-3 ss:w-[70%] mx-auto   sm:w-[34%] mx-auto lg:w-[70%] mx-auto top-[-10%] ${isSelected===product.productID? "bg-red":""} hover:border-red hover:border-2 hover:text-red `} ref={buttonRef} onLoad={handleLoadTime} onClick={()=>{handleClick(product.productID  )}} >
                                             <img src={AddToCart} alt="icon" className='hover:font-red'/>
                                              <p className=' font-bold ' >Add to Cart</p>
                                              </button>
                                              <p className="text-gray-500 font-size-[16px] ">{product.productName}</p>
                                                   <p className="font-bold">{product.productDescription}</p>
                                                   <p className="font-weight-[600] text-red ">{product.price}</p>
                         </div>
                           
                      

                      </div>
                    )}
                    

                        </div>
                        ))}
                        
                         </div>
                        {isUpdated ? ( 
                      
                      <div className='flex flex-col items-start lg:w-[70%] mx-auto mr-5'>
                      <div className='bg-whity border-none  px-4 py-4 rounded-2xl mt-7 ss:w-[90%] mx-auto'>
                        <h1 className='text-red font-bold text-[25px] mb-4'>Your Cart(7)</h1>
                          {orderList.map(order=>(
                           <div key={order.orderID} className='flex justify-between mb-4'>
                           <div>
                             <h4 className='font-bold mb-2 lg:text-[18px]'>{order.name}</h4>
                             <span className='text-red mr-4 lg:text-[15px]'>{order.times}</span>
                             <span className='text-Lighter_gray mr-3 lg:text-[15px]'>{order.price}</span>
                             <span className='text-Dark_gray  lg:text-[15px]'>{order.totalPrice}</span>
                           </div>
                           <img src={remove} alt="remove" className='inline'/>
                           </div>
                         ))}
                         <div>
                          <div className='flex justify-between mb-4'>
                            <span className='text-Dark_gray text-[16px]'>Order Total</span>
                            <span className='font-bold text-[20px]'>$46.50</span>
                          </div>
                           <span className='bg-Rose-50 border-none rounded-lg block flex items-center justify-center  py-4 w-[90%] mx-auto'><img src={neutral} alt=" a tree" className='mr-2' /><p className='inline text-[12px]'>This is a <span className='font-bold'>carbon-neutral</span> delivery</p></span>
                           <Confirm/>
                         </div>
                      </div>
                
                     </div>
                        ):(
                          <div className='lg:flex flex-col items-start'>
                          <div className="bg-Rose-100 border-none w-[90%] mx-auto px-10 pt-5 pb-8 rounded-2xl  lg:flex-shrink-0  ">
                                                  <h1 className="text-red  font-bold font-size-[50%] mb-5">Your Cart (0)</h1>
                                                  <img src={empyty} alt=" empty cart" className=" self-center" />
                                                  <p className="self-center text-gray-200" >You added items will appear here</p>
                                                </div>
                                                </div>
                        )}
                        
                         </div>
                      
                            </div>
                       
      
      
    
        );
      }
  
    
    export default Card;

         //card
      // <div className='flex flex-col items-start'>
      //                       <h1 className='text-red font-bold font-size-[50%]'>Your Cart(7)</h1>
      //                       {orderList.map(order=>(
      //                         <div key={order.orderID}>
      //                         <h4>{order.name}</h4>
      //                         <span>{order.times}</span>
      //                         <span>{order.price}</span>
      //                         <span>{order.totalPrice}</span>
      //                         </div>
      //                       ))}

      //                     </div>



      //card
      //  <div className='lg:flex flex-col items-start'>
      //                      <div className="bg-Rose-100 border-none w-[90%] mx-auto px-10 pt-5 pb-8 rounded-2xl  lg:flex-shrink-0  ">
      //                                              <h1 className="text-red  font-bold font-size-[50%] mb-5">Your Cart (0)</h1>
      //                                              <img src={empyty} alt=" empty cart" className=" self-center" />
      //                                              <p className="self-center text-gray-200" >You added items will appear here</p>
      //                                            </div>




     