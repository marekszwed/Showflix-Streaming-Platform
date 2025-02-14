import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Header } from "./components";
import { Bounce, ToastContainer } from "react-toastify";
import Paths from "./routes/routes";
import { FormProvider } from "./context/FormContext/FormContext";
import { ActorProvider } from "./context/ActorContext/ActorContext";
import { FavoriteProvider } from "./context/FavoriteMoviesContext/FavoriteMoviesContext";
import { PlayerProvider } from "./context/VideoPlayerContext/VideoPlayerContext";

function App() {
	return (
		<PlayerProvider>
			<FavoriteProvider>
				<FormProvider>
					<ActorProvider>
						<ThemeProvider theme={theme}>
							<Header />
							<Paths />
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
					</ActorProvider>
				</FormProvider>
			</FavoriteProvider>
		</PlayerProvider>
	);
}

export default App;
