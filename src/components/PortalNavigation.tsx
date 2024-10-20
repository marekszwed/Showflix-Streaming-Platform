import styled from 'styled-components';

const PortalNav = styled.nav`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
`;

function PortalNavigation() {
	return (
		<>
			<PortalNav></PortalNav>
		</>
	);
}

export default PortalNavigation;
