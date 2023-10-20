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

// Nav

export interface NavLinkProps {
	text: string;
}
