import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import App from "./App.tsx";
import GlobalStyles from "./globalStyles.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<GlobalStyles />
			<App />
		</BrowserRouter>
	</StrictMode>
);
