import { lilita } from '@/libs/fonts';
import * as React from 'react';
import ReactSlickSlider from '../UI/Carousels/ReactSlickSlider';

interface TestimonySectionProps {
  reviews: any
}

const TestimonySection: React.FunctionComponent<TestimonySectionProps> = ({ reviews }) => {
  return (
    <section className="testimony-section w-full py-16 sm:py-20 bg-backgroundWhite flex flex-col items-center">
      
      {/* Section Header with Design System Tokens */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 mb-8 sm:mb-12">
        <span className="bg-colorSecondary text-primaryTextColor font-black text-xs uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-sm mb-3">
          💬 Customer Reviews
        </span>
        <h2 
          style={lilita.style} 
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-primaryTextColor uppercase tracking-wide drop-shadow-sm"
        >
          What People Are Saying
        </h2>
        <p className="text-sm sm:text-base text-secondaryTextColor mt-3 leading-relaxed">
          See why thousands of pizza lovers choose Don Ruent&apos;s for authentic wood-fired perfection every single day.
        </p>
      </div>

      <ReactSlickSlider slides={reviews} />
    </section>
  );
};

export default React.memo(TestimonySection);
