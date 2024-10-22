import styled from 'styled-components';

const Header = styled.header`
	position: fixed;
	display: flex;
	justify-content: space-between;
	top: 0;
	width: 100%;
	padding: 2em 0 3em 0;

	.logo {
		display: flex;
		margin-left: 10em;
	}

	h1 {
		font-size: 4rem;
		text-transform: uppercase;
		font-weight: bold;
		color: #c11119;
	}
`;

export default Header;
