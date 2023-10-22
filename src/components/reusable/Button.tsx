import { ButtonProps } from '../../types/types';

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
	return (
		<button
			className={`button py-4 bg-orange rounded-md outline-none text-sm text-white font-bold ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
