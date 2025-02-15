import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePlayerContext from "../../hooks/usePlayerContext";
import * as S from "./VideoPlayer.styled";
import ReactDOM from "react-dom";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function VideoPlayer() {
	const { trailerURL, closeTrailer } = usePlayerContext();

	if (!trailerURL) return null;

	return ReactDOM.createPortal(
		<S.PlayerOverlay onClick={closeTrailer}>
			<S.PlayerContent>
				<S.Button onClick={closeTrailer}>
					<FontAwesomeIcon icon={faClose} />
				</S.Button>
				<S.Player
					src={trailerURL}
					title="Trailer"
					allow="autoplay; encrypted-media"
					allowFullScreen
				/>
			</S.PlayerContent>
		</S.PlayerOverlay>,
		document.getElementById("player") as HTMLElement
	);
}

export default VideoPlayer;
