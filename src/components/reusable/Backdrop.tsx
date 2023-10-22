import { BackdropProps } from '../../types/types';

const Backdrop: React.FC<BackdropProps> = ({ className, onClick }) => {
	return (
		<div
			className={`fixed inset-0 bg-black opacity-70 ${
				className ? className : 'hidden'
			}`}
			onClick={onClick}
		></div>
	);
};

export default Backdrop;
