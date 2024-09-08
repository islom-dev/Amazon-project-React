import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusket } from '../counter/counterBusket.js'
import { deleteProduct } from '../counter/counterBusket.js';
import { setDecrement, setIncremement } from '../counter/counterBusket.js';
import { useTranslation } from 'react-i18next';


const Cart = () => {
  const dispatch = useDispatch();
  const dataBusket = useSelector((store) => store.busket.korzina);
  const {t, i18n} = useTranslation()

  const changeLanguage=(language)=>{
    i18n.changeLanguage(language)
    }
    

  const onIncrease = (item) => {
    dispatch(
      setIncremement({
        id: item.id,
        name: item.title,
        img: item.img,
        price: item.price,
        cartQuantity: item.cartQuantity,
      })
    );
  };

  const onDecrease = (item) => {
    dispatch(
      setDecrement({
        id: item.id,
        name: item.title,
        img: item.img,
        price: item.price,
        cartQuantity: item.cartQuantity,
      })
    );
  };

  let totalPrice = 0

  useEffect(() => {
    dispatch(fetchBusket());
  }, [dispatch]); // Dispatch only once

    

    
  return (<>
    <div>
    

      {
        <>
      <div className='bg-white max-w-7xl m-auto p-6'>
        <p className='text-2xl mb-3'>{t("Shopping Cart")}</p>
        <hr className='border mb-3' />
      </div>
          {dataBusket.map((e) => {
            totalPrice += e.price * e.cartQuantity
            return (
              <>
                <div className='flex items-center gap-10 max-w-7xl m-auto mb-20'>
                  <img className='w-[150px]' src={e.img} alt="" />
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-start'>
                      <h1 className='text-2xl w-[700px]'>{e.title}</h1>
                      <div className='flex items-center gap-1'>
                        <p className='font-bold text-xl'>{e.dollar}</p>
                        <div className='font-bold text-xl'>{(e.price * e.cartQuantity)}</div>
                      </div>
                    </div>
                    <p>In Stock</p>
                    <div className='flex items-center gap-2'>
                      <input type="checkbox" /> 
                      <p>This is a gift</p>
                      <a className='text-[#007185] hover:text-[#c7511f]' href="https://www.amazon.com/gp/help/customer/display.html/ref=ord_cart_shr?pop-up=1&nodeId=759346">Learn more</a>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <p className='font-bold'>Style:</p>
                        <p className='font-bold'>Color</p>  
                      </div>
                      <div>
                        <p>AirFly Pro </p>
                        <p>White</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                    <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <div className="flex items-center justify-around w-[120px] gap-10px">
                          <button
                            type="button"
                            onClick={() => onDecrease(e)}
                            className="bg-[black] px-4 py-4 rounded  flex items-center justify-center lg:w-5 lg:h-5 active:scale-90"
                          >
                            <h1 className="w-5 h-5 text-white items-center">-</h1>
                          </button>
                          <h1 className="text-[25px]">{e.cartQuantity}</h1>
                          <button
                            type="button"
                            onClick={() => onIncrease(e)}
                            className="bg-[black] px-4 py-4 rounded flex items-center justify-center lg:w-5 lg:h-5 active:scale-90"
                          >
                            <h1 className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]">
                              +
                            </h1>
                          </button>
                        </div>
                    </div>
                      <span>|</span>
                      <button onClick={()=> dispatch(deleteProduct(e.id))} className='text-[#007185] hover:text-[#c7511f]'>Delete</button>
                      <span>|</span>
                      <button className='text-[#007185] hover:text-[#c7511f]'>Save for later</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </>
      }

        <div className='absolute right-20 top-44 px-6 py-5 bg-gray-100'>
          <div>
            <p className='text-xl'>Subtotal:<span className='font-bold pl-2'>${totalPrice}</span></p>   
            <button className='bg-yellow-400 text-xs mt-2 px-7 rounded-md py-2'>Proceed to checkout</button> 
          </div>           
        </div>

<p className='font-semibold text-2xl max-w-7xl m-auto mt-32'>Customers who bought Poly Voyager Focus 2 UC Wireless Headset with Micr... also bought these items from other categories:</p>
<div className='grid grid-cols-5 gap-10 mt-10 max-w-7xl m-auto'>
        <a href="#">
          <div className='w-[230px]'>
            <div>
              <img src="https://m.media-amazon.com/images/I/41AuzibyEAL._AC_UF226,226_FMjpg_.jpg" alt="" />
              <div className='flex items-center gap-4 ml-5 mt-1'>
                <p className='bg-[#CC0C39] px-2 rounded-sm text-sm text-white'>18% off</p>
                <p className='text-[#CC0C39] text-sm font-semibold'>Limited time deal</p>
              </div>
              <p className='text-sm ml-5 mt-1 mb-1 hover:text-orange-500'>SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smart…</p>
            </div>
            <div className='flex items-center gap-2 ml-5'>
              <div className='bg-gray-700 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-300 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-900 px-3 py-3 rounded-full'></div>
              <div className='bg-blue-700 px-3 py-3 rounded-full'></div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className='w-[230px]'>
            <div>
              <img src="https://m.media-amazon.com/images/I/418vjaO+sWL._AC_UF226,226_FMjpg_.jpg" alt="" />
              <div className='flex items-center gap-4 ml-5 mt-1'>
                <p className='bg-[#CC0C39] px-2 rounded-sm text-sm text-white'>18% off</p>
                <p className='text-[#CC0C39] text-sm font-semibold'>Limited time deal</p>
              </div>
              <p className='text-sm ml-5 mt-1 mb-1 hover:text-orange-500'>Apple 2022 MacBook Air Laptop with M2 chip: 13.6-i…</p>
            </div>
            <div className='flex items-center gap-2 ml-5'>
              <div className='bg-gray-700 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-300 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-900 px-3 py-3 rounded-full'></div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className='w-[230px]'>
            <div>
              <img src="https://m.media-amazon.com/images/I/41I0Q7LHsbL._AC_UF226,226_FMjpg_.jpg" alt="" />
              <div className='flex items-center gap-4 ml-5 mt-1'>
                <p className='bg-[#CC0C39] px-2 rounded-sm text-sm text-white'>18% off</p>
                <p className='text-[#CC0C39] text-sm font-semibold'>Limited time deal</p>
              </div>
              <p className='text-sm ml-5 mt-1 mb-1 hover:text-orange-500'>SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smart…</p>
            </div>
            <div className='flex items-center gap-2 ml-5'>
              <div className='bg-gray-700 px-3 py-3 rounded-full'></div>
              <div className='bg-red-900 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-300 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-900 px-3 py-3 rounded-full'></div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className='w-[230px]'>
            <div>
              <img src="https://m.media-amazon.com/images/I/512m3yY5Y8L._AC_UF226,226_FMjpg_.jpg" alt="" />
              <div className='flex items-center gap-4 ml-5 mt-1'>
                <p className='bg-[#CC0C39] px-2 rounded-sm text-sm text-white'>18% off</p>
                <p className='text-[#CC0C39] text-sm font-semibold'>Limited time deal</p>
              </div>
              <p className='text-sm ml-5 mt-1 mb-1 hover:text-orange-500'>SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smart…</p>
            </div>
            <div className='flex items-center gap-2 ml-5'>
              <div className='bg-gray-700 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-300 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-900 px-3 py-3 rounded-full'></div>
              <div className='bg-blue-700 px-3 py-3 rounded-full'></div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className='w-[230px]'>
            <div>
              <img src="https://m.media-amazon.com/images/I/51rrIxEUzQL._AC_UF226,226_FMjpg_.jpg" alt="" />
              <div className='flex items-center gap-4 ml-5 mt-1'>
                <p className='bg-[#CC0C39] px-2 rounded-sm text-sm text-white'>18% off</p>
                <p className='text-[#CC0C39] text-sm font-semibold'>Limited time deal</p>
              </div>
              <p className='text-sm ml-5 mt-1 mb-1 hover:text-orange-500'>SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smart…</p>
            </div>
            <div className='flex items-center gap-2 ml-5'>
              <div className='bg-gray-700 px-3 py-3 rounded-full'></div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className='w-[230px]'>
            <div>
              <img src="https://m.media-amazon.com/images/I/51wQWIf6SHL._AC_UF226,226_FMjpg_.jpg" alt="" />
              <div className='flex items-center gap-4 ml-5 mt-1'>
                <p className='bg-[#CC0C39] px-2 rounded-sm text-sm text-white'>18% off</p>
                <p className='text-[#CC0C39] text-sm font-semibold'>Limited time deal</p>
              </div>
              <p className='text-sm ml-5 mt-1 mb-1 hover:text-orange-500'>SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smart…</p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className='w-[230px]'>
            <div>
              <img src="https://m.media-amazon.com/images/I/71QQyonJToL._AC_UF452,452_FMjpg_.jpg" alt="" />
              <div className='flex items-center gap-4 ml-5 mt-1'>
                <p className='bg-[#CC0C39] px-2 rounded-sm text-sm text-white'>18% off</p>
                <p className='text-[#CC0C39] text-sm font-semibold'>Limited time deal</p>
              </div>
              <p className='text-sm ml-5 mt-1 mb-1 hover:text-orange-500'>SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smart…</p>
            </div>
          </div>
        </a>
        <a href="#">
          <div className='w-[230px]'>
            <div>
              <img src="https://m.media-amazon.com/images/I/31OwOgb1LCL._AC_UF226,226_FMjpg_.jpg" alt="" />
              <div className='flex items-center gap-4 ml-5 mt-1'>
                <p className='bg-[#CC0C39] px-2 rounded-sm text-sm text-white'>18% off</p>
                <p className='text-[#CC0C39] text-sm font-semibold'>Limited time deal</p>
              </div>
              <p className='text-sm ml-5 mt-1 mb-1 hover:text-orange-500'>SAMSUNG Galaxy S24 Ultra Cell Phone, 512GB AI Smart…</p>
            </div>
            <div className='flex items-center gap-2 ml-5'>
              <div className='bg-gray-700 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-300 px-3 py-3 rounded-full'></div>
              <div className='bg-gray-900 px-3 py-3 rounded-full'></div>
              <div className='bg-blue-700 px-3 py-3 rounded-full'></div>
            </div>
          </div>
        </a>
        
        
</div>
    </div>
  </>)
}

export default Cart