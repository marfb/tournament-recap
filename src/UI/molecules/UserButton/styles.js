import styled from 'styled-components';
import BaseButton from 'UI/atoms/BaseButton';
import Icon from 'UI/atoms/Icon/MaterialUI';
import Text from 'UI/atoms/Text';
import {getColor} from 'theme/utils';

const UserButton = styled(BaseButton)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: transparent;
	border: 0px;
	overflow: hidden;
	padding: 2px;
	cursor: pointer;
	${({size}) => {
		if (size === 'mini')
			return `
            width: 60px;
            height: 60px;      
        `;
		if (size === 'big')
			return `
            width: 80px;
            height: 80px;
        `;
		return `
            width: 70px;
            height: 70px;
        `;
	}}
	&:hover {
		div {
			border-color: ${getColor('grayscale', '800')};
		}
		p {
			color: ${getColor('text', 'light')};
		}
	}
`;

const UserImg = styled.img`
	width: inherit;
`;

const UserIcon = styled(Icon)``;

const UserText = styled(Text)`
	color: ${getColor('text', 'main')};
	${({size}) => {
		if (size === 'mini')
			return `
            font-size: 12px;
        `;
		if (size === 'big')
			return `
            font-size: 15px;
        `;
		return `
            font-size: 14px;
        `;
	}}
`;

const IconImgWrapper = styled.div`
	overflow: hidden;
	border-radius: 50%;
	border: 2px solid transparent;
	transition: 0.2s;
	${({size}) => {
		if (size === 'mini')
			return `
            width: 30px;
        `;
		if (size === 'big')
			return `
            width: 50px;
        `;
		return `
            width: 40px;
        `;
	}}
`;

export default {
	UserButton,
	UserImg,
	UserIcon,
	IconImgWrapper,
	UserText,
};
