import { ButtonProps } from '../../types/types';
import IconCart from '../../assets/icons/IconCart';

const Button: React.FC<ButtonProps> = ({ id, text, className, onClick }) => {
	return (
		<button
			className={`button py-4 bg-orange rounded-md outline-none text-sm text-white font-bold ${className}`}
			onClick={onClick}
		>
			{id === 'product-control' && <IconCart className='product-btn me-4' />}
			{text}
		</button>
	);
};

export default Button;
