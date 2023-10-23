import { AmountBtnProps } from '../../types/types';
import IconMinus from '../../assets/icons/IconMinus';
import IconPlus from '../../assets/icons/IconPlus';

const AmountBtn: React.FC<AmountBtnProps> = ({ id, onClick }) => {
	return (
		<button className={`amount-btn p-4 outline-none`} onClick={onClick}>
			{id === 'increase' && <IconPlus />}
			{id === 'decrease' && <IconMinus />}
		</button>
	);
};

export default AmountBtn;
