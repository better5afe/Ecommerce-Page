import Nav from './components/UI/Nav';
import { NavContextProvider } from './context/NavContextProvider';

const App = () => {
	return (
		<>
			<NavContextProvider>
				<Nav />
			</NavContextProvider>
		</>
	);
};

export default App;
