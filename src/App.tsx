import { NavContextProvider } from './context/NavContextProvider';
import { ModalContextProvider } from './context/ModalContextProvider';
import Nav from './components/UI/Nav';
import Main from './components/UI/Main';

const App = () => {
	return (
		<>
			<NavContextProvider>
				<Nav />
				<ModalContextProvider>
					<Main />
				</ModalContextProvider>
			</NavContextProvider>
		</>
	);
};

export default App;
