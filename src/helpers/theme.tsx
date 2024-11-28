import { Theme } from "./types";

export const theme: Theme = {
	colors: {
		pureWhite: "#ffffffe4",
		PrimaryRed: "#c11119",
		btnHover: "#a51017",
		brighterDark: "#000000a2",
		// formBackground
		mediumDark: "#00000084",
		// headerBackground
		almostDark: "#000000d9",
		// shadowBackground
		dirtyYellow: "#f8d123",
		filmSelect: "#302f2f",
		error: "#ff0000",
	},
	fontSize: {
		small: "1.1rem",
		normal: "1.6rem",
		bigger: "2.2rem",
		big: "3.6rem",
		header: "4rem",
	},
	fontWeight: {
		normal: "400",
		bold: "800",
	},
	zindex: {
		negative: "-1",
		neutral: "0",
		positive: "1",
		positivePlus: "2",
		positiveMax: "3",
		notification: "4",
		maxIndex: "5",
	},
};
