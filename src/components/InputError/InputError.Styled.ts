import styled from "styled-components";
import { ErrorMixin } from "../../helpers/mixins";

export const StyledError = styled.p<{ $error?: boolean }>`
	${ErrorMixin}
	padding: 0.5em 0 0 1.7em;
`;
