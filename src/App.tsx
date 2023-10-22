import { NavContextProvider } from './context/NavContextProvider';
import Nav from './components/UI/Nav';
import Main from './components/UI/Main';

const App = () => {
	return (
		<>
			<NavContextProvider>
				<Nav />
				<Main />
			</NavContextProvider>
		</>
	);
};

export default App;
