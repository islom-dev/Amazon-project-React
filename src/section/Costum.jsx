import React from 'react'
import { useTranslation } from 'react-i18next'

const Costum = () => {

    const {t, i18n} = useTranslation()
    const changeLanguage=(language)=>{
        i18n.changeLanguage(language)
    }

  return (
    <>
        <div className='bg-[#007185] py-28'>
            <div className='max-w-7xl m-auto'>
                <p className='text-white text-2xl mb-5'>Welcome to Amazon Customer Service</p>
                <p className='text-white mb-10'>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</p>
                <div className='grid grid-cols-3 items-center gap-10'>
                    <div className='flex items-center bg-white rounded-xl p-3'>
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2._CB432205751_.png" alt="" />
                        <span>A delivery, order or return</span>
                    </div>
                    <div className='flex items-center bg-white rounded-xl p-3'>
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2._CB432205750_.png" alt="" />
                        <span>A delivery, order or return</span>
                    </div>
                    <div className='flex items-center bg-white rounded-xl p-3'>
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2._CB432205751_.png" alt="" />
                        <span>A delivery, order or return</span>
                    </div>
                    <div className='flex items-center bg-white rounded-xl p-3'>
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png" alt="" />
                        <span>A delivery, order or return</span>
                    </div>
                    <div className='flex items-center bg-white rounded-xl p-3'>
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png" alt="" />
                        <span>A delivery, order or return</span>
                    </div> 
                    <div className='flex items-center bg-white rounded-xl p-3'>
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2._CB432205751_.png" alt="" />
                        <span>A delivery, order or return</span>
                    </div>
                    <div className='flex items-center bg-white rounded-xl p-3'>
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3._CB428304563_.png" alt="" />
                        <span>A delivery, order or return</span>
                    </div>
                    <div className='flex items-center bg-white rounded-xl p-3'>
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3._CB428112012_.png" alt="" />
                        <span>A delivery, order or return</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-[#f7fafa]'>
            <div className='max-w-7xl m-auto mt-20'>
                <p className='text-2xl font-bold'>{t("Search our help library")}</p>
                <input className='outline-1 outline pl-2 text-base py-2 w-full mt-3 mb-5' placeholder='Type something' type="search" />
                <div>
                    <p className='text-2xl font-bold'>All help topics</p>
                    <div className='flex items-center gap-10'>
                        <div className='flex flex-col gap-3'>
                            <a className=' bg-[#008296] text-white px-5 py-2 rounded-md' href="#">Take qiuck Action</a>
                            <a className='hover:bg-gray-300 active:bg-[#008296] active:text-white px-5 py-2 rounded-md'href="#">Where's my stuff</a>
                            <a className='hover:bg-gray-300 active:bg-[#008296] active:text-white px-5 py-2 rounded-md' href="#">Shipping and Delivery</a>
                            <a className='hover:bg-gray-300 active:bg-[#008296] active:text-white px-5 py-2 rounded-md' href="#">Returns, Refunds and Product Support</a>
                        </div>
                        <div className='grid grid-cols-3 gap-5 items-center'>
                            <div className='border border-gray-300 hover:bg-gray-100 py-4 px-3 rounded-md'>
                                <p className='font-medium mb-2'>Track your package</p>
                                <p className='text-xs'>Track your packages in Your Orders.</p>
                            </div>
                            <div className='border border-gray-300 hover:bg-gray-100 py-4 px-3 rounded-md'>
                                <p className='font-medium mb-2'>Track your package</p>
                                <p className='text-xs'>Track your packages in Your Orders.</p>
                            </div>
                            <div className='border border-gray-300 hover:bg-gray-100 py-4 px-3 rounded-md'>
                                <p className='font-medium mb-2'>Track your package</p>
                                <p className='text-xs'>Track your packages in Your Orders.</p>
                            </div>
                            <div className='border border-gray-300 hover:bg-gray-100 py-4 px-3 rounded-md'>
                                <p className='font-medium mb-2'>Track your package</p>
                                <p className='text-xs'>Track your packages in Your Orders.</p>
                            </div>
                            <div className='border border-gray-300 hover:bg-gray-100 py-4 px-3 rounded-md'>
                                <p className='font-medium mb-2'>Track your package</p>
                                <p className='text-xs'>Track your packages in Your Orders.</p>
                            </div>
                            <div className='border border-gray-300 hover:bg-gray-100 py-4 px-3 rounded-md'>
                                <p className='font-medium mb-2'>Track your package</p>
                                <p className='text-xs'>Track your packages in Your Orders.</p>
                            </div>
                            <div className='border border-gray-300 hover:bg-gray-100 py-4 px-3 rounded-md'>
                                <p className='font-medium mb-2'>Track your package</p>
                                <p className='text-xs'>Track your packages in Your Orders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Costum