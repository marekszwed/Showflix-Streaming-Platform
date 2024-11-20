import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Films from "./pages/Films/Films";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route index path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/films" element={<Films />} />
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
