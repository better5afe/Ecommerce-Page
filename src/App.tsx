import Nav from './components/UI/Nav';
import { NavContextProvider } from './context/NavContextProvider';
import { CartContextProvider } from './context/CartContextProvider';

const App = () => {
	return (
		<div>
			<NavContextProvider>
				<CartContextProvider>
					<Nav />
				</CartContextProvider>
			</NavContextProvider>
		</div>
	);
};

export default App;
