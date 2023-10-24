import Link from 'next/link'
import React from 'react'
import { HeadRoom } from '.'
import Image from 'next/image'
import sidebarOptions from '../../data/sidebarOptions.json'
import Icon from './Icon'
const Sidebar = ({children}: {children: React.ReactNode}) => {
   return (
      <div className='h-screen w-full flex'>
         <aside id="logo-sidebar" className="w-1/5 fixed lg:static transition-transform -translate-x-full lg:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               {/* BRAND */}
               <Link href={"#"} className=''>
                  <Image src="/idyours-brand.png" width={100} height={100} priority className="h-auto w-auto mx-2 mb-3" alt="ID-yours Logo"/>
               </Link>
               {/* NAV LIST */}
               <ul className="space-y-2 font-medium">
                  {sidebarOptions.map((list) => {
                     return(
                        <li key={list.id} className='px-1'>
                           <Link 
                              href={list.link}
                              className={`
                                 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group
                              `}
                           >
                              <Icon iconName={list.icon} size={20}/>
                              <span className="ml-3">{list.label}</span>
                              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                           </Link>
                           {
                              list.data && list.data.length > 0 ? 
                                 <ul className='py-2flex flex-col gap-2'>
                                    {list.data.map((subItem, i) => {
                                       return (
                                          <li key={subItem.id} className='hover:bg-gray-100 py-2 px-5 rounded-md ease-in-out duration-200'>
                                             <Link href={subItem.link} className='flex gap-1'>
                                                <Icon iconName={subItem.icon} size={15}/>
                                                <span>{subItem.label}</span>
                                             </Link>
                                          </li>
                                       )
                                    })}
                                 </ul>
                              : null 
                           }
                        </li>
                     )
                  })}
               </ul>
            </div>
         </aside>

         <div className='h-auto w-full p-5 bg-backgroundWhite'>
            <HeadRoom />
            {children}
         </div>
      </div>
   )
}

export default Sidebar
