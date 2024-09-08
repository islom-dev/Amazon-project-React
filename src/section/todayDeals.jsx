import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../counter/counterSlice'
import { addBusket } from '../counter/counterBusket'
import { useParams } from 'react-router-dom'
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import "aos/dist/aos.css"



const todayDeals = () => {

  const {t, i18n} = useTranslation()
    const changeLanguage=(language)=>{
      i18n.changeLanguage(language)
    }

  const dispatch = useDispatch()
  const {id} = useParams()
  const dataMap = useSelector((state) => state.counter.todos)

  
  const API2 = 'http://localhost:3000/data2';

  const onclickadd = async (elem) => {
      try {
          const response = await fetch(API2);
          const data = await response.json();

          const existingElement = data.find(e => e.id === elem.id);

          if (existingElement) {
            message.success("You have alreday Added")
          } else {
          dispatch(addBusket(elem));
          }
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };
  

  useEffect(()=>{
      dispatch(fetchTodos())
      Aos.init();
  }, [dispatch])
  

  
  return (<>


    <div className='bg-blue-100'>
      <div className='max-w-7xl m-auto py-10'>
        <p className='text-2xl font-bold '>{t("Today's Deals")}</p>
        {dataMap?.map((elem) => {
          return (
                <>
                <div data-aos="zoom-in">
                    <div key={id} className='flex items-center mt-10 gap-5 bg-white py-6 px-6 rounded-md'>
                      <div>
                        <img className='w-[150px]' src={elem.img} alt="" />
                      </div>
                      <div className='flex'>
                          <div className='w-[500px] flex flex-col gap-2'>
                              <p className='text-2xl '>{elem.title}</p>
                              <div className='flex items-center gap-3'>
                                  <p className='hover:text-[#c7511f] text-[13px] hover:underline text-[#007185]'>{elem.link1}</p>
                                  <p className='hover:text-[#c7511f] text-[13px] hover:underline text-[#007185]'>{elem.link2}</p>
                                  <p className='hover:text-[#c7511f] text-[13px] hover:under text-[#007185]'>{elem.link3}</p>
                              </div>
                              <div className='flex items-center gap-5'>
                                  <p className='bg-[#232F3E] px-3 text-sm text-white'>{elem.text1}</p>
                                  <p className='text-sm'>{elem.text2}</p>
                              </div>
                              <div className='flex items-center gap-5'>
                                  <p className='font-bold'>{elem.priceT}:</p>
                                  <div className='flex items-center gap-2'>
                                      <p className='text-xl'>{elem.dollar}</p>
                                      <p className='text-xl '>{elem.price}</p>  
                                  </div>                     
                              </div>
                              <hr />
                          </div>
                          <div className='ml-7'>
                              <div className='border-[2px] rounded-md  px-5 py-3 mb-3'>
                                  <p> No featured offers available</p>
                                  <a className='text-[#007185]' href="">Learn more</a>
                              </div>
                              <hr />
                              <div className='mt-3'>
                                  <button onClick={() => onclickadd(elem)} className='border active:bg-slate-200 hover:bg-slate-100 px-20 py-2 rounded-md border-black'>Add to List</button>
                              </div>                        
                          </div>
                      </div>
                      <hr />
                    </div>
                </div>
                </>
          );
        })}
      </div>
    </div>
  </>)
}

export default todayDeals