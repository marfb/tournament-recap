import styled from 'styled-components';
import {getColor} from 'theme/utils';
import Icon from 'UI/atoms/Icon/MaterialUI';

const InputContainer = styled.div`
	position: relative;
	display: flex;

	&:hover {
		svg {
			color: ${getColor('primary', 'main')} !important;
		}
	}
`;

const InputLabel = styled.span`
	position: absolute;
	font-family: 'Open Sans';
	transition: 0.2s;
	color: ${getColor('text', 'dark')};
	top: 11px;
	left: ${({withLeftIcon}) => (withLeftIcon ? '36px' : '11px')};
	pointer-events: none;
	${({floatLabel}) =>
		floatLabel &&
		`
        color: ${getColor('primary', 'main')};
        top: -20px;
        left: 11px;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 2px;
    `}
`;

const InputPlaceholder = styled.span`
	position: absolute;
	font-family: 'Open Sans';
	transition: 0.2s;
	color: ${getColor('text', 'dark')};
	top: 11px;
	left: 11px;
	pointer-events: none;
`;

const ErrorMessage = styled.span`
	position: absolute;
	font-family: 'Open Sans';
	color: ${getColor('danger', 'main')};
	top: 100%;
	margin-top: 5px;
	font-size: 12px;
	transition: 0.2s;
`;

const Input = styled.input`
	all: unset;
	font-family: 'Open Sans';
	width: 100%;
	font-size: 16px;
	color: ${getColor('text', 'main')};
	padding: 10px;
	padding: ${({withLeftIcon, withRightIcon}) => {
		if (withLeftIcon && withRightIcon) return '10px 36px';
		if (withLeftIcon) return '10px 10px 10px 36px';
		if (withRightIcon) return '10px 36px 10px 10px';
		return '10px';
	}};
	background-color: ${getColor('grayscale', '900')};
	border: 1px solid ${getColor('grayscale', '700')};
	border-radius: 6px;
	box-sizing: border-box;

	&:hover {
		border: 1px solid ${getColor('primary', 'main')};
	}

	&:active,
	&:focus {
		outline: 0 none;
		outline-offset: 0;
		box-shadow: 0 0 0 1px ${getColor('primary', 'main')};
		border-color: ${getColor('primary', 'light')};
	}

	&::placeholder {
		color: ${getColor('text', 'dark')};
	}

	&:disabled {
		pointer-events: none;
		background-color: ${getColor('grayscale', '900')}55;
		color: ${getColor('text', 'dark')};
		border: 1px solid ${getColor('grayscale', '600')};
	}

	${({error}) =>
		error &&
		`
            border-color: ${getColor('danger', 'main')};
            &:hover {
		        border: 1px solid ${getColor('danger', 'main')};
	        }
            &:active,
            &:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 1px ${getColor('danger', 'main')};
                border-color: ${getColor('danger', 'light')};
            }
        `}

	transition: background-color .2s,color .2s,border-color .2s,box-shadow .2s;
`;

const BaseIcon = styled(Icon)`
	width: 20px;
	position: absolute;
	pointer-events: none;
`;

const LeftIcon = styled(BaseIcon)`
	left: 10px;
`;

const RightIcon = styled(BaseIcon)`
	right: 10px;
`;

export default {
	Input,
	InputLabel,
	InputContainer,
	ErrorMessage,
	InputPlaceholder,
	LeftIcon,
	RightIcon,
};
