export interface Props {
	text: string;
	width?: string;
	margin?: string;
	to: string;
}

export interface Theme {
	colors: {
		pureWhite: string;
		PrimaryRedColor: string;
		btnHoverColor: string;
		formBackground: string;
	};
	fontSize: {
		normal: string;
		big: string;
		header: string;
	};
	fontWeight: {
		bold: string;
	};
}
