import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
	return (
		<>
			<LoginPage />
			<Routes>
				{/* <Route index element={<HomePage />} /> */}
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</>
	);
}

export default App;
