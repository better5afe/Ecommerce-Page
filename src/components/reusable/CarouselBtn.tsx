import { CarouselBtnProps } from '../../types/types';
import IconNext from '../../assets/icons/IconNext';
import IconPrevious from '../../assets/icons/IconPrevious';

const CarouselBtn: React.FC<CarouselBtnProps> = ({
	id,
	className,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={`carousel-btn absolute top-1/2 flex items-center justify-center h-10 w-10 bg-white rounded-full outline-none ${className}`}
		>
			{id === 'next' ? <IconNext /> : <IconPrevious />}
		</button>
	);
};

export default CarouselBtn;
