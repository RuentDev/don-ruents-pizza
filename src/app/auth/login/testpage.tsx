import { SubmitButton, LoginButton, InputText } from '@/components'
import React from 'react'
// from-[#0f8399] from-10% via-[#289888] via-30% to-[#0bd658] to-90%
const LoginPage = () => {


  return (
    <div className='w-full h-screen bg-gradient-to-r'>
      <div className='w-full h-full grid grid-cols-2 grid-rows-1'>
        {/* LEFT */}
        <div className='w-full h-full  bg-gray-100'>
          LEFT
        </div>
        {/* RIGHT */}
        <div className='w-full h-full'>
          <div className='h-full w-[50%] flex flex-col justify-center items-center m-auto'>
            <div className="form-header-container text-center">
              <h1 className="heading3 text-4xl font-bold">Welcome Back&quest;</h1>
              <span className="subHeading3 text-gray-500 text-bold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, itaque&quest;</span>
            </div>
            {/* <form className="form w-full flex flex-col gap-3 justify-center items-center">
              <InputText id='loginEmail' type="text" label='E-mail' placeholder='Email Address' />
              <InputText id='logiPassword' type="password" label='Password' placeholder='Password' iconColor='whit' />
              <div className='select-none text-center border border-transparent px-2 py-1 hover:border-b-colorSecondary ease-in-out duration-300 cursor-pointer text-colorSecondary'>Forgot Password?</div>
              <SubmitButton text='Login' color="colorPrimary" />
            </form> */}
            <div className='m-1'>
              <span></span>
              <span className='select-none'>or</span>
            </div>
            <div className='flex items-center justify-evenly gap-6'>
              <LoginButton
                label='Github'
                icon={{
                  prefix: 'fab',
                  iconName: "github"
                }}
                size={5}
              />
              <LoginButton
                label='Facebook'
                icon={{
                  prefix: 'fab',
                  iconName: "facebook"
                }}
                size={5}
                color={'#1674EA'}
              />
              <LoginButton
                label='Google'
                icon={{
                  prefix: 'fab',
                  iconName: "google"
                }}
                size={5}
              />
            </div>
            <div className='m-5'>
              <p className='select-none'>Don&apost;t have an account&quest; <span className='select-none text-colorSecondary cursor-pointer'>Signup</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage