import { useState } from 'react';
import { ModalContext } from './modal-context';
import { ProviderProps } from '../types/types';

export const ModalContextProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModalHandler = () => {
		setIsModalOpen(true);
	};

	const closeModalHandler = () => {
		setIsModalOpen(false);
	};

	return (
		<ModalContext.Provider
			value={{
				isOpen: isModalOpen,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
