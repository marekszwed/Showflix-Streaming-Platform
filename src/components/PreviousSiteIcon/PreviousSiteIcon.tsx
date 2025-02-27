import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import * as S from "./PreviousSiteIcon.styled";
import { useLocation, useNavigate } from "react-router-dom";

function PreviousSiteIcon() {
	const location = useLocation();
	const PATHS = ["/", "/films"];
	const navigate = useNavigate();

	if (PATHS.includes(location.pathname)) {
		return null;
	} else {
		return (
			<S.StyledNavlink
				to="#"
				onClick={(e) => {
					e.preventDefault();
					navigate(-1);
				}}
			>
				<S.PreviousSiteIcon icon={faAngleLeft} />
			</S.StyledNavlink>
		);
	}
}

export default PreviousSiteIcon;
