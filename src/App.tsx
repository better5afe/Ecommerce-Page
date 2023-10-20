import Nav from './components/UI/Nav';
import { NavContextProvider } from './context/NavContextProvider';

const App = () => {
	return (
		<div>
			<NavContextProvider>
				<Nav />
			</NavContextProvider>
		</div>
	);
};

export default App;
