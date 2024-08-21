import * as React from 'react';
import FeaturedMenu from '../UI/Menus/FeaturedMenu';

interface  FeaturedProductsSectionProps {
    products: any
}

const FeaturedProductsSection: React.FunctionComponent<FeaturedProductsSectionProps> = ({products}) => {
  return (
    <section className='featured-section w-full h-auto'>
        <FeaturedMenu products={products} />
    </section>
  )
};

export default FeaturedProductsSection;
