import styled from 'styled-components';
import BaseButton from 'UI/atoms/BaseButton';
import Icon from 'UI/atoms/Icon/MaterialUI';
import Text from 'UI/atoms/Text';
import {getColor} from 'theme/utils';

const ButtonWrapperFilled = styled(BaseButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	background-color: ${({semanticColor}) => getColor(semanticColor, 'main')};
	height: 30px;
	width: ${({circle}) => (circle ? '30px' : 'auto')};
	border: 1px solid ${({semanticColor}) => getColor(semanticColor, 'main')};
	border-radius: ${({rounded, circle}) => {
		if (rounded) return '30px';
		if (circle) return '50%';
		return '5px';
	}};
	padding: 5px;
	cursor: pointer;
	margin: 2px;
	&:hover {
		background-color: ${({semanticColor}) => getColor(semanticColor, 'light')};
		border-color: ${({semanticColor}) => getColor(semanticColor, 'light')};
	}
	&:active {
		background-color: ${({semanticColor}) => getColor(semanticColor, 'dark')};
		border-color: ${({semanticColor}) => getColor(semanticColor, 'dark')};
	}
	${({focus}) =>
		focus &&
		`
        &:focus {
            outline: 0 none;
            outline-offset: 0;
			box-shadow: 0 0 0 2px ${getColor('grayscale', '500')};
        }
    `}
	&:disabled {
		cursor: default;
		opacity: 0.6;
		pointer-events: none;
	}
	${({active}) =>
		active &&
		`
			outline: 0 none;
			outline-offset: 0;
			box-shadow: 0 0 0 1px ${getColor('grayscale', '50')};
		`}
	${({switchOrder}) => switchOrder && `flex-direction: row-reverse;`};
`;

const ButtonWrapperEmpty = styled(ButtonWrapperFilled)`
	background-color: transparent;
	border: 1px solid transparent;
	&:hover {
		background-color: ${({semanticColor}) => getColor(semanticColor, 'main50')};
		border: 1px solid transparent;
	}

	&:active {
		background-color: ${({semanticColor}) => getColor(semanticColor, 'main100')};
		border: 1px solid ${({semanticColor}) => getColor(semanticColor, 'main')};
	}

	& > p,
	& > span svg {
		color: ${({semanticColor}) => getColor(semanticColor, 'main')} !important;
	}

	&:disabled {
		cursor: default;
		opacity: 0.6;
		pointer-events: none;
	}
`;

const ButtonWrapperOutline = styled(ButtonWrapperFilled)`
	background-color: transparent;
	border: 1px solid ${({semanticColor}) => getColor(semanticColor, 'main')};
	&:hover {
		background-color: ${({semanticColor}) => getColor(semanticColor, 'main50')};
		border: 1px solid ${({semanticColor}) => getColor(semanticColor, 'main')};
	}
	&:active {
		background-color: ${({semanticColor}) => getColor(semanticColor, 'main100')};
		border: 1px solid ${({semanticColor}) => getColor(semanticColor, 'main')};
	}

	& > p,
	& > span svg {
		color: ${({semanticColor}) => getColor(semanticColor, 'main')} !important;
	}
`;

const ButtonIcon = styled(Icon)`
	margin: 0px 2px;
`;

const ButtonText = styled(Text)`
	margin: 0px 2px;
`;

export default {
	ButtonWrapperFilled,
	ButtonIcon,
	ButtonText,
	ButtonWrapperEmpty,
	ButtonWrapperOutline,
};
