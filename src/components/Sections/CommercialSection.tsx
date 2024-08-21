import React from 'react'
import Image from 'next/image'
import Buttons from '../UI/Buttons'


interface CommercialSectionProps {}

const  CommercialSection: React.FC<CommercialSectionProps> = () => {
    return (
        <section className='commercial bg-colorSecondary h-auto w-full'>
            <div className="inner-container flex flex-col gap-7 sm:flex-row justify-center w-full h-auto p-10 md:p-20">
            <div className="image-container w-full h-auto flex items-center justify-center">
                <div className="inner-container relative w-full h-auto sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem]">
                <Image src={"/about-02-img.png"} className='w-auto h-auto' width={200} height={100} alt='about-image' priority />
                </div>
            </div >
            <div className="content-container block w-full h-auto">
                <h2 className='text-primaryTextColor text-[2rem] md:text-[2rem] lg:text-[3rem] font-[500] lg:font-[700] -tracking-2'>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD PIZZA</h2>
                <p className='text-secondaryTextColor font-extralight '>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae at integer orci congue and metus in mollislorem primis gravida</p>
                <div className='button-container w-full h-auto mt-10'>
                <Buttons.OrderNowButton 
                    bg="colorPrimary" 
                    bgHover="white" 
                    textColor="white" 
                    textHoverColor="colorSecondary" 
                />
                </div>
            </div>
            </div>
        </section>
    )
}


export default CommercialSection