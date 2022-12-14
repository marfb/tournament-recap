import styled from 'styled-components';
import MuiIcon from 'UI/atoms/Icon/MaterialUI';
import Text from 'UI/atoms/Text';
import {getColor} from 'theme/utils';

const FooterContainer = styled.footer`
	height: 60px;
	transition: all 0.2s;
	background-color: transparent;
	margin-top: 80px;
`;

const FooterRow = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const FooterWrapper = styled.div`
	width: 1280px;
	margin: 0 auto;
	display: flex;
	border-top: 1px solid ${getColor('grayscale', '900')};
	padding: 0 20px;
`;

const LogoWrapper = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	& svg {
		height: 100%;
		width: 90px;
	}
`;

const CopyWrapper = styled.div`
	flex: 5;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Copy = styled(Text)`
	color: ${getColor('text', 'main')};
	font-size: 12px;
`;

const SocialWrapper = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const SocialLink = styled.a`
	border: none;
	background: transparent;
	width: 15px;
	height: 15px;
	margin: 0 5px;
	cursor: pointer;
`;

const SocialIcon = styled(MuiIcon)`
	& svg {
		color: ${getColor('text', 'main')} !important;
	}

	&:hover {
		& svg {
			color: ${getColor('text', 'light')} !important;
		}
	}
`;

export default {
	FooterContainer,
	FooterRow,
	FooterWrapper,
	LogoWrapper,
	SocialWrapper,
	CopyWrapper,
	Copy,
	SocialLink,
	SocialIcon,
};
