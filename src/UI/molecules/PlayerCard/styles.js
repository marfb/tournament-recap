import styled from 'styled-components';
import BaseButton from 'UI/atoms/BaseButton';
import Text from 'UI/atoms/Text';
import {getColor} from 'theme/utils';

const CardContainer = styled(BaseButton)`
	border: none;
	background-color: transparent;
	max-width: 320px;
	margin: 20px;
	padding: 0;
	height: 400px;
	position: relative;
	transition: 0.2s;
	cursor: pointer;
	border: 1px solid ${getColor('grayscale', '900')};
	border-radius: 5px;

	&:hover {
		border: transparent;
	}
`;

const DisplayWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	pointer-events: none;
`;

const DisplayVideo = styled.video`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const DisplayImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const CountryWrapper = styled.div`
	position: absolute;
	top: 5px;
	right: 10px;
	width: 35px;
	height: 35px;
	background-color: red;
`;

const CountryFlag = styled.img``;

const NameWrapper = styled.div``;

const PlayerName = styled(Text)``;

export default {
	CardContainer,
	DisplayWrapper,
	DisplayVideo,
	DisplayImg,
	CountryWrapper,
	CountryFlag,
	NameWrapper,
	PlayerName,
};
