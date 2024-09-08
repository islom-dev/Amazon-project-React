import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';




import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';


import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { textSearchValue } from '../counter/counterSlice';



const Layout = () => 
    
    {
        const [open, setOpen] = React.useState(false);
        const a = useSelector((state) => state.busket.korzina)

        
        const toggleDrawer = (newOpen) => () => {
            setOpen(newOpen);
            };
            
        const {t,i18n} = useTranslation()
        const changeLanguage=(language)=>{
            i18n.changeLanguage(language)
    }


                
  
    const DrawerList = (
      <Box sx={{ width: 350, ml:3 }} role="presentation" onClick={toggleDrawer(true)}>
        <List>
        <p className='font-bold text-xl mb-5'>Digital content & Devices</p>
        <Accordion className='w-[300px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p className='font-bold'>Amazon Music</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col gap-3'>
            <a className='hover:bg-slate-100 pb-2 pl-2 pt-2' href="https://www.amazon.com/music/unlimited?ref_=nav_em__dm_hf_0_2_2_2">Amazon Music Unlimited</a>
            <a className='hover:bg-slate-100 pb-2 pl-2 pt-2' href="https://www.amazon.com/music/free?ref_=nav_em__dm_nav_nw_0_2_2_3">Free Streaming Music</a>
            <a className='hover:bg-slate-100 pb-2 pl-2 pt-2' href="">Podcasts</a>
            <a className='hover:bg-slate-100 pb-2 pl-2 pt-2' href="">Open Web Player</a>
            <a className='hover:bg-slate-100 pb-2 pl-2 pt-2' href="">Download the app</a>
          </div>
        </AccordionDetails>
      </Accordion>
        </List>
      </Box>
    );

  return (<>
    <div className='bg-[#131A22] box-border py-2'>
      <div className='flex items-center justify-between gap-6 max-w-7xl m-auto'>
         <div className='flex items-center gap-10 box-border'>
                <a className=' hover:border px-4 py-2' href="">
                    <Link to={"/"}>
                        <img width={"100px"} src="/src/assets/amazon-logo-white.png" alt="" />
                    </Link>
                </a>
            <div className='hover:border px-4'>
               <a className='flex items-center' href="">
                  <p><LocationOnIcon  className='text-white'/></p>
                  <div className='leading-[14px]'>
                     <p className='text-[#999] text-[10px]'>{t("Delivery to")}</p>
                     <p className='text-[#DDD] font-semibold text-[12px]'>{t("Tajikistan")}</p>
                  </div>
               </a>
            </div>
         </div>
         <div className='flex items-center box-border'>
            <select name="" id="" className='bg-[#d4d4d4] pl-2 text-xs px-2 py-[11px] rounded-l-md'>
               <option value="">{t("All")}</option>
               <option value="">{t("Baby")}</option>
               <option value="">{t("Books")}</option>
            </select>
            <input value={textSearchValue} onChange={(event)=> setTextSearch(event.target.value)}  className='bg-white w-[590px] pl-2 text-md px-2 py-[8.5px]' type="search" placeholder={t("Search Amazon")} />
            <div className='bg-orange-400 pl-2 text-xs px-2 py-[8.5px] rounded-r-md'>
               <SearchIcon />
            </div>
            <select name="" id=""  onChange={(event)=>{changeLanguage(event.target.value)}} className='ml-3 text-sm bg-transparent hover:border text-[#DDD] px-2 py-2 rounded-sm'>
               <option value="en">EN</option>
               <option value="ru">RU</option>
            </select>
            <div>
                <div className=' ml-2 mr-2 bg-transparent hover:border text-[#DDD] px-3 py-1 rounded-sm'>
                <a className=' leading-[10px]' href="#">
                    <p className='text-[#DDD] text-xs'>{t("Returns")}</p>
                    <p className='text-[#DDD] font-semibold text-sm'>'{t("Order")}</p>
                </a>
                </div>
            </div>
            <div>
                <div className='hover:border px-5 py-2'>
                <Link to={"/cart"}>
                    <a className='flex items-end' href="">
                        <AddShoppingCartIcon className='text-white'/>
                        <p className='text-[#DDD] text-[12px] font-semibold'>{t("Cart")}</p>
                        <p className='text-orange-400 font-bold  px-1 rounded-full text-[13px] absolute right-[50px] top-4'>{a.length}</p>
                    </a>               
                </Link>
                </div>
            </div>
         </div>
      </div>
    </div>
    <div className='bg-[#1f2a38] pt-2 pb-2'>
        <div className='flex items-center max-w-7xl m-auto text-white'>
            <div>
                <button className='flex items-center font-serif mr-3 text-sm font-bold' onClick={toggleDrawer(true)}><MenuIcon className='text-white'/><span className='text-white'>All</span></button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
            <Link to={"todaydeals"}>
                <a className='px-3 py-1 hover:border text-sm' href="">{t("Today's Deals")}</a>
            </Link>
            <Link to={"/costumer"}>
                <div>
                    <a className='px-3 py-1 hover:border text-sm' href="">{t("Costumer Serveces")}</a>
                </div>
            </Link>
           <Link to={"/registry"}>
                <div>
                    <a className='px-3 py-1 hover:border text-sm' href="">{t("Registry")}</a>
                </div>
           </Link>
            <div>
            <a className='px-3 py-1 hover:border text-sm' href="">{t("Gift Cards")}</a>
            </div>
            <div>
            <a className='px-3 py-1 hover:border text-sm' href="">{t("Sell")}</a>
            </div>
        </div>
    </div>

    <Outlet />

    <div className='mt-36'>
        <button className='bg-[#37475A] hover:opacity-90 text-white w-full pt-3 pb-3 text-lg'><a href="#">Back to top</a></button>
        <hr />
        <div className='bg-[#37475A]'>
           <div className='max-w-3xl justify-center m-auto pt-6 pb-6'>
            <div className='flex items-center justify-between'>
                <img src="/src/images/amazon-logo-white.png" alt="" />
                <div className='flex items-center gap-5'>
                    <select onChange={(event)=>{changeLanguage(event.target.value)}} className='border bg-transparent text-[#DDD] px-5 py-3 rounded-sm text-xs'>
                        <option value="en">English</option>
                        <option value="ru">Russian</option>
                    </select>
                    <a className='border text-[#DDD] px-5 py-3 rounded-sm text-xs' href="#">$ USD - U.S. Dollar</a>
                    <button className='border text-[#DDD] px-5 py-3 rounded-sm text-xs'><a href="#">{t("United State")}</a></button>
                </div>
            </div>
           </div>
        </div>
        <div className='bg-[#131A22]'>
            <div className='grid grid-cols-7 items-center gap-10 max-w-6xl m-auto pt-10 pb-10'>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
                <div className='text-[#DDD] hover:underline'> 
                    <a href="#" className='' >
                        <p className='text-[#DDD]'>Amazon Music</p>
                        <p className='text-[#999]'> Stream tream millions of songs</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</>)
}

export default Layout