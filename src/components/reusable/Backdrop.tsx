import { BackdropProps } from '../../types/types';

const Backdrop: React.FC<BackdropProps> = ({ className, onClick }) => {
	return (
		<div
			className={`fixed inset-0 bg-black transition-opacity duration-300 ${
				className ? className : 'opacity-0 -z-10'
			}`}
			onClick={onClick}
		></div>
	);
};

export default Backdrop;
