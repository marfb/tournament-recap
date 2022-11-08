import styled from 'styled-components';
import BaseButton from 'UI/atoms/BaseButton';
import Text from 'UI/atoms/Text';
import {getColor} from 'theme/utils';

const DisplayWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	pointer-events: none;
	position: relative;
	z-index: 2;
`;

const DisplayVideo = styled.iframe`
	position: absolute;
	left: -150%;
	top: -30%;
`;

const DisplayImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const CountryWrapper = styled.div`
	position: absolute;
	top: 10px;
	right: 15px;
	width: 35px;
	height: 26px;
	background-color: transparent;
	z-index: 5;
	visibility: hidden;
`;

const CountryFlag = styled.span`
	width: 100%;
	height: 100%;
	border-radius: 3px;
	box-shadow: -1px 1px 23px -1px ${getColor('grayscale', '900')};
`;

const NameWrapper = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	transition: all 0.2s;
	z-index: 4;
`;

const PlayerName = styled(Text)`
	font-size: 22px;
	color: #fff;
	font-weight: 600;
	padding: 5px;
	width: 100%;
	background-color: #04081e;
`;

const CardContainer = styled(BaseButton)`
	border: none;
	background-color: transparent;
	width: 290px;
	padding: 0;
	height: 390px;
	position: relative;
	transition: 0.2s;
	cursor: pointer;
	border: 1px solid ${getColor('primary', 'main')};

	&:hover {
		border-color: transparent;
		& ${NameWrapper} {
			display: flex;
			height: 100%;
			bottom: 0;
			left: 0;
			background-color: transparent;
			background-image: linear-gradient(
				180deg,
				${getColor('grayscale', '900')}55,
				${getColor('grayscale', '900')}
			);
			backdrop-filter: blur(0px);
			align-items: end;
		}

		& ${PlayerName} {
			font-size: 22px;
			background-color: transparent;
			backdrop-filter: blur(0);
			padding: 0;
			color: ${getColor('primary', 'main')};
			margin-bottom: 25px;
		}

		& ${CountryWrapper} {
			display: block;
			z-index: 5;
			visibility: inherit;
		}

		&:after {
			content: '';
			position: absolute;
			top: -1px;
			left: -1px;
			right: -1px;
			bottom: -1px;
			background: linear-gradient(
				45deg,
				${getColor('primary', 'light')},
				${getColor('primary', 'main')},
				${getColor('primary', 'dark')},
				${getColor('primary', 'main')}
			);
			z-index: 1;
		}

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(
				45deg,
				${getColor('primary', 'light')},
				${getColor('primary', 'main')},
				${getColor('primary', 'dark')},
				${getColor('primary', 'main')}
			);
			z-index: 2;
			filter: blur(10px);
		}
	}
`;

const CardContainer2 = styled(CardContainer)`
	&:hover {
		&:after {
			background: linear-gradient(45deg, #ffd800, #ff5520, #750cf2, #0cbcf2);
		}

		&:before {
			background: linear-gradient(45deg, #ffd800, #ff5520, #750cf2, #0cbcf2);
		}
	}
`;

export default {
	CardContainer,
	CardContainer2,
	DisplayWrapper,
	DisplayVideo,
	DisplayImg,
	CountryWrapper,
	CountryFlag,
	NameWrapper,
	PlayerName,
};
