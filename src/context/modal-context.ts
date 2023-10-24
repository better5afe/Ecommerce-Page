import React from 'react';
import { ModalContextProps } from '../types/types';

export const ModalContext = React.createContext<ModalContextProps>({
	isOpen: false,
	openModal: () => {},
	closeModal: () => {},
});
