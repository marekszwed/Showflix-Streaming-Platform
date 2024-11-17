import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Films from "./pages/Films/Films";
import { useState } from "react";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<string[]>(["Sci-Fi"]);
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header
					selectedGenre={selectedGenre}
					setSelectedGenre={setSelectedGenre}
				/>
				<Routes>
					<Route index path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="/films"
						element={<Films selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />}
					/>
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
