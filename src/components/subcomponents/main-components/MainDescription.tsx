import { product } from '../../../utils/product-info';
import ProductControls from './product/ProductControls';

const MainDescription = () => {
	return (
		<div className='w-full p-4'>
			<p className='mb-4 text-xs text-orange font-bold uppercase tracking-widest md:mt-8 md:mb-6'>
				{product.producent}
			</p>
			<h2 className='mb-4 text-2xl font-bold leading-none md:text-3xl'>
				{product.productName}
			</h2>
			<p className='mb-4 text-[13px] text-darkGrayishBlue md:mb-8'>
				{product.productInfo}
			</p>
			<div className='flex items-center justify-between mb-4 font-bold md:mb-8'>
				<div className='flex items-center'>
					<p className='text-2xl'>${product.productPrice.toFixed(2)}</p>
					{product.isDiscounted && (
						<p className='ms-4 px-1 bg-paleOrange rounded-md text-sm text-orange'>
							{product.discountAmount}%
						</p>
					)}
				</div>
				{product.isDiscounted && (
					<p className='text-sm text-darkGrayishBlue line-through opacity-50'>
						${product.originalPrice.toFixed(2)}
					</p>
				)}
			</div>
			<ProductControls />
		</div>
	);
};

export default MainDescription;
