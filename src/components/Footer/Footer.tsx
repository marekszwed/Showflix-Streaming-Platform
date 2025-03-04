// import { useEffect, useState } from "react";
import * as S from "./Footer.styled";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<S.Footer>
			Project and design made by Marek Szwed &copy; {currentYear}
		</S.Footer>
	);
}

export default Footer;
