// Context

export interface NavContextProps {
	isOpen: boolean;
	toggleNav: () => void;
	closeNav: () => void;
}

export interface ProviderProps {
	children: React.ReactNode;
}

export interface CartContextProps {
	isOpen: boolean;
	toggleCart: () => void;
	closeCart: () => void;
}

// General Components

export interface IconProps {
	className: string;
}
