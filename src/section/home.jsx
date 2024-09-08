import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../main.jsx';

// import required modules
import { Navigation } from 'swiper/modules';

const home = () => {
  const {t, i18n} = useTranslation()
  const changeLanguage=(language)=>{
    i18n.changeLanguage(language)
  }

  
  return (<>
    <div>
      <div className='relative'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper relative">
          <SwiperSlide><img src="https://m.media-amazon.com/images/I/71YTsbTxBsL._SX3000_.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <div className=' flex items-center gap-10 absolute max-w-7xl left-9 top-96 z-10'>
      <div className='bg-white p-4'>
            <h1 className='text-xl font-bold '>{t("Gaming Accessories")}</h1>
            <div className='grid grid-cols-2 gap-3 mt-3'>
              <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Headsets")}</p>
                </div>
              </a>
             <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Keyboards")}</p>
                </div>
             </a>
              <a href="#">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Computer mice")}</p>
                </div>
              </a>
              <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Chairs")}</p>
                </div>
              </a>
              <a className='mt-5 text-sm hover:text-orange-400' href="">{t("See more")}</a>
            </div>
      </div>

      <div className='bg-white p-4'>
            <h1 className='text-xl font-bold '>{t("Gaming Accessories")}</h1>
            <div className='grid grid-cols-2 gap-3 mt-3'>
              <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Headsets")}</p>
                </div>
              </a>
             <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Keyboards")}</p>
                </div>
             </a>
              <a href="#">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Computer mice")}</p>
                </div>
              </a>
              <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Chairs")}</p>
                </div>
              </a>
              <a className='mt-5 text-sm hover:text-orange-400' href="">{t("See more")}</a>
            </div>
      </div>

        <div className='bg-white p-4'>
            <h1 className='text-xl font-bold '>{t("Gaming Accessories")}</h1>
            <div className='grid grid-cols-2 gap-3 mt-3'>
              <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Headsets")}</p>
                </div>
              </a>
             <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Keyboards")}</p>
                </div>
             </a>
              <a href="#">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Computer mice")}</p>
                </div>
              </a>
              <a href="">
                <div>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="" />
                  <p className='text-xs mt-3'>{t("Chairs")}</p>
                </div>
              </a>
              <a className='mt-5 text-sm hover:text-orange-400' href="">{t("See more")}</a>
            </div>
        </div>
        <div className='bg-white p-4 mb-10'>
            <h1 className='text-xl font-bold '>{t("Gaming Accessories")}</h1>
            <div className='pt-3'>
              <a href="">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="" />
                <a className='mt-5 text-sm hover:text-orange-400 pt-6' href="">{t("See more")}</a>
              </a>
            </div>
        </div>
      </div>
    </div>
  </>)
}

export default home