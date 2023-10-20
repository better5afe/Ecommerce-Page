// Context

export interface NavContextProps {
	isNavOpen: boolean;
	toggleNav: () => void;
	closeNav: () => void;
	isCartOpen: boolean,
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
