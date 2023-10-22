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
	text: string;
	className?: string;
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