import styled from 'styled-components';
import BaseButton from 'UI/atoms/BaseButton';
import Icon from 'UI/atoms/Icon/MaterialUI';
import Text from 'UI/atoms/Text';
import palette from 'theme/palette';

const ButtonWrapperFilled = styled(BaseButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	background-color: ${palette.primary.main};
	height: 30px;
	width: ${({circle}) => (circle ? '30px' : 'auto')};
	border: 1px solid ${palette.primary.main};
	border-radius: ${({rounded, circle}) => {
		if (!rounded && !circle) return '5px';
		if (rounded) return '30px';
		if (circle) return '50%';
		return '5px';
	}};
	padding: 5px;
	cursor: pointer;
	margin: 2px;
	&:hover {
		background-color: ${palette.primary.light};
		border-color: ${palette.primary.light};
	}
	&:active {
		background-color: ${palette.primary.dark};
		border-color: ${palette.primary.dark};
	}
	${({active}) =>
		active &&
		`
        &:focus {
            outline: 0 none;
            outline-offset: 0;
            box-shadow: 0 0 0 1px ${palette.grayscale['50']};
        }
    `}
	&:disabled {
		cursor: default;
		opacity: 0.6;
		pointer-events: none;
	}
`;

const ButtonWrapperEmpty = styled(ButtonWrapperFilled)`
	background-color: transparent;
	border: 1px solid transparent;
	&:hover {
		background-color: ${palette.primary.main}11;
		border: 1px solid transparent;
	}

	&:active {
		background-color: ${palette.primary.main}33;
		border: 1px solid ${palette.primary.main};
	}

	& > p,
	& > span svg {
		color: ${palette.primary.main} !important;
	}

	&:disabled {
		cursor: default;
		opacity: 0.6;
		pointer-events: none;
	}
`;

const ButtonWrapperOutline = styled(ButtonWrapperFilled)`
	background-color: transparent;
	border: 1px solid ${palette.primary.main};
	&:hover {
		background-color: ${palette.primary.main}11;
		border: 1px solid ${palette.primary.main};
	}
	&:active {
		background-color: ${palette.primary.main}33;
		border: 1px solid ${palette.primary.main};
	}

	& > p,
	& > span svg {
		color: ${palette.primary.main} !important;
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
