import { lilita } from '@/libs/fonts';
import * as React from 'react';
import ReactSlickSlider from '../UI/Carousels/ReactSlickSlider';

interface TestimonySectionProps {
  reviews: any
}

const TestimonySection: React.FunctionComponent<TestimonySectionProps> = ({reviews}) => {
  return(
    <section className='testimony-section w-full h-auto'>
      <h2 style={lilita.style} className="text-[3rem] text-colorPrimary text-center mt-5 mb-2">What other people say?</h2>
      {/* <Carousel1 slides={reviewData} /> */}
      <ReactSlickSlider slides={reviews} />
    </section>
  );
};

export default TestimonySection;
