// Context

export interface NavContextProps {
	isNavOpen: boolean;
	openNav: () => void;
	closeNav: () => void;
	isCartOpen: boolean;
	toggleCart: () => void;
	closeCart: () => void;
}

export interface ModalContextProps {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export interface ProviderProps {
	children: React.ReactNode;
}

// cart slice

export interface CartItem {
	id: number;
	name: string;
	thumbnail: any;
	price: number;
	amount: number;
}

export interface CartStateSlice {
	cartItems: CartItem[];
	amount: number;
}

// General Components

export interface IconProps {
	className: string;
}

export interface BackdropProps {
	className: string;
	onClick: () => void;
}

export interface ButtonProps {
	id?: string;
	text: string | any;
	className?: string;
	onClick: () => void;
}

export interface CarouselBtnProps {
	id: string;
	className: string;
	onClick: () => void;
}

export interface AmountBtnProps {
	id: string;
	onClick: () => void;
}

// Nav

export interface NavLinkProps {
	text: string;
}

export interface CartBadgeProps {
	amount: number
}

// Cart

export interface CartListItemProps {
	id: number;
	name: string;
	thumbnail: string;
	price: number;
	amount: number;
}

// Main

// Carousel

export interface CarouselProps {
	className: string;
}

// Product

export interface CurrentSlide {
	currentSlide: number;
}

export interface CarouselThumbnails extends CurrentSlide {
	className?: string;
	borderColor?: string;
}
