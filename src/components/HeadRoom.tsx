import React from 'react'
import { PageName, SearchBox } from '.'
import NotificationButton from './Buttons/NotificationButton'

const HeadRoom = () => {
  const now = new Date()
  return (
    <>
      <div className='h-auto w-full flex mb-5'>
      <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 m-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
        <div className='h-auto w-full flex flex-row items-center justify-center'>
          <div className="h-full w-3/6">
            <SearchBox placeholder='Search...'/>
          </div>
          <div className="icon-list h-auto w-3/6">
            <div className="icon-containers h-full w-[40%] ml-auto grid grid-cols-5 grid-rows-1 gap-2 justify-center">
              {/* <NotificationButton iconName='message' title="message" notipCount={3}/> */}
              <NotificationButton iconName='bell' title="notification" notipCount={10}/>
            </div>
          </div>
        </div>
      </div>
      <PageName time={now.toString()}/>
    </>
  )
}

export default HeadRoom
