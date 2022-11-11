import styled from 'styled-components';

const LayoutContainer = styled.div`
	display: block;
	height: 100%;
	width: 100%;
	${({addPadding}) => addPadding && 'padding-top: 160px'};
`;

export default {LayoutContainer};
