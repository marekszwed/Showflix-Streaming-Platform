import { useContext } from "react";
import PlayerContext from "../context/VideoPlayerContext/VideoPlayerContext";

const usePlayerContext = () => {
	const context = useContext(PlayerContext);
	if (!context) {
		throw new Error("usePlayerContext must be used within a PlayerProvider");
	}
	return context;
};

export default usePlayerContext;
