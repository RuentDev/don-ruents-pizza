import { lilita } from '@/libs/fonts';
import * as React from 'react';
import locations from '@/data/locations.json'
import Image from 'next/image';
import Icon from '../UI/Icon';
interface LocationsSectionProps {
  
}

const LocationsSection: React.FunctionComponent<LocationsSectionProps> = (props) => {
  return (
    <section className='gallery-section w-full h-auto p-5 lg:p-10'>
        <h2 style={lilita.style} className="text-[3rem] text-colorPrimary text-center mt-5 mb-2">Our locations</h2>
        <div className="inner-container w-full h-auto">
          <div className="locatios-contents w-full h-auto grid grid-cols-1 md:grid-cols-3 md:gap-5">
            {locations.map((location) => (
              <div
                key={location.id}
                className='w-full h-auto flex flex-col justify-center items-center text-center my-3'
              >
                <div className="image-container  w-full h-[25rem] md:h-[15rem] lg:h-[25rem] relative overflow-hidden rounded-md">
                  <Image
                    className='absolute object-center object-cover w-auto h-auto hover:scale-[1.1] ease-in-out duration-1000'
                    src={location.image}
                    alt={location.name}
                    width={500}
                    height={500}
                    priority

                  />
                </div>
                <h3 className='text-[2rem] mt-5 text-colorPrimary uppercase'>{location.name}</h3>
                <p className='text-[1.2rem]'><Icon iconName={{prefix: "fas", iconName: "phone"}} size={17}/> {location.phone}</p>
                <h4 className='text-[1.5rem]'>ADDRESS</h4>
                <p className=' max-w-[300px] text-gray-500'>{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
};

export default LocationsSection;
