// Context

export interface NavContextProps {
	isOpen: boolean;
	toggleNav: () => void,
	closeNav: () => void
}

export interface ProviderProps {
	children: React.ReactNode;
}

// General Components

export interface IconProps {
	className: string;
}
