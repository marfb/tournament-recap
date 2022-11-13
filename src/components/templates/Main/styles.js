import styled from 'styled-components';
import {motion} from 'framer-motion';

const LayoutContainer = styled(motion.div)`
	display: block;
	height: 100%;
	width: 100%;
	${({$addPadding}) => $addPadding && 'padding-top: 160px'};
`;

export default {LayoutContainer};
