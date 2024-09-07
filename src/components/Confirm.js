import Popup from 'reactjs-popup'
import react,{useState} from 'react'
import Confirmed from '../images/icon-order-confirmed.svg'
import Tiramisu from '../images/image-tiramisu-mobile.jpg'
import Creme from '../images/image-creme-brulee-mobile.jpg'
import PannaCotta from '../images/image-panna-cotta-mobile.jpg'


const Confirm = () => {
    const orderList=[
        {orderID:1, name:'Classic Tiramisu', times:'1x', price:'@$5.50',totalPrice:'$5.50',Image:Tiramisu},
        {orderID:2,name:'Vanilla Bean Creme B...',times:'4x',price:'@$7.00',totalPrice:'$28.00',Image:Creme},
        {orderID:3,name:'Vanilla Panna Cotta',times:'2x',price:'@$6.50',totalPrice:'$13.00',Image:PannaCotta}
      ]
 
    return (  
        <Popup trigger={ <button className='bg-red text-whity w-[90%] mx-auto px-10 py-3 rounded-full mt-7 ml-5 hover:bg-Dark_red' >Confirm Order</button>}   modal overlayStyle={{background:'rgba(0,0,0,0.5)'}} >
        {close =>(

                <div className='flex flex-col items-start  lg:w-[50%] mx-auto relative z-60 '>
                 <div className='bg-whity px-4 py-6 '>
                 <div className='ml-4'>
                   <img src={Confirmed} alt="a tick in a circle "/>
                     <h1 className='font-bold text-[30px] lg:inline mr-4 text-[20px]'>Order</h1>
                     <h1 className='font-bold text-[30px] lg:inline text-[20px]'>Confirmed</h1>
                     <p className='text-Dark_gray lg:text-[15px] mb-3'>We hope you enjoy your food!</p>
                 </div>
                 <div className='flex flex-col items-start'>
                    <div className='bg-Rose-100  px-4 py-7 mt-2 rounded-xl ss:w-[90%] mx-auto'>
                   {orderList.map(order =>(
                    <div key={order.orderID}>
                     <div className='flex justify-between mb-2 border-b-2 border-Lighter_gray'>
                         <div className='flex  gap-4 mb-4'>
                         <img src={order.Image} alt="food" className='w-full rounded-2xl inline ss:max-w-[35%] lg:max-w-[20%] '/>
                         <div>
                             <h4 className='font-bold mb-2 lg:text-[18px]'>{order.name}</h4>
                                         <span className='text-red mr-4 lg:text-[15px]'>{order.times}</span>
                                         <span className='text-Lighter_gray mr-3 lg:text-[15px]'>{order.price}</span>
                         </div>
                         </div>
                         <span className='lg:text-[15px]'>{order.totalPrice}</span>
                     </div>
                
                    </div>
                
                   ))}
                    <div className='flex justify-between mb-4'>
                                <span className='text-Black_gray text-[16px]'>Order Total</span>
                                <span className='font-bold text-[20px]'>$46.50</span>
                              </div>
                    </div>
                    <button className='bg-red text-whity px-2 py-4 rounded-full w-[90%] mx-auto mt-4' onClick={close}>Start New Order</button>
                
                 </div>
                 </div>
                </div>
            
        )}

        </Popup>
    );
}
 
export default Confirm;