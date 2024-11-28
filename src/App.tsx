import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FilmsPage from "./pages/Films/Films";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route index path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/films" element={<FilmsPage />} />
				</Routes>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					transition={Bounce}
				/>
			</ThemeProvider>
		</>
	);
}

export default App;
