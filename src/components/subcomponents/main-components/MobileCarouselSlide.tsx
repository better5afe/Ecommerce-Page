import { MobileCarouselSlideProps } from '../../../types/types';

const MobileCarouselSlide: React.FC<MobileCarouselSlideProps> = ({
	id,
	className,
}) => {
	return (
		<div id={id} className={`w-full h-full ${className}`}></div>
	);
};

export default MobileCarouselSlide;
