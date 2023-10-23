// Context

export interface NavContextProps {
	isNavOpen: boolean;
	openNav: () => void;
	closeNav: () => void;
	isCartOpen: boolean;
	toggleCart: () => void;
	closeCart: () => void;
}

export interface ProviderProps {
	children: React.ReactNode;
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
