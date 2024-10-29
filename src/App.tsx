import { Route, Routes } from "react-router-dom";
import { theme } from "./helpers/theme";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import FilmPage from "./pages/MainPage/FilmPage";
import { ThemeProvider } from "styled-components";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route index path="/Home" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/main" element={<FilmPage />}></Route>
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
