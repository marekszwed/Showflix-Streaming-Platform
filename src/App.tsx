import { Route, Routes } from "react-router-dom";
import { theme } from "./helpers/theme";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import FilmList from "./pages/FilmList/FilmList";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route index path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/filmlist" element={<FilmList />} />
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
