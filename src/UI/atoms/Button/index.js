import React from 'react';
import {bool, string} from 'prop-types';
import {validateString, validateBoolean} from 'utils';
import styles from './styles';

const Button = ({
	icon,
	children,
	disabled,
	active,
	rounded,
	circle,
	variant,
	semanticColor,
	...props
}) => {
	const showIcon = icon && validateString(icon);
	const showText = children && validateString(children);
	const isDisabled = validateBoolean(disabled) ? disabled : false;
	const isActive = validateBoolean(active) ? active : false;
	const isRounded = validateBoolean(rounded) ? rounded : false;
	const isCircle = validateBoolean(circle) && !showText ? circle : false;

	if (!showIcon && !showText) return null;

	const buttonVariants = {
		filled: styles.ButtonWrapperFilled,
		empty: styles.ButtonWrapperEmpty,
		outline: styles.ButtonWrapperOutline,
	};
	const validVariant = variant && validateString(variant) ? variant : 'filled';

	const ButtonWrapper = buttonVariants[validVariant] || buttonVariants.filled;

	return (
		<ButtonWrapper
			disabled={isDisabled}
			active={isActive}
			rounded={isRounded}
			circle={isCircle}
			semanticColor={semanticColor}
			{...props}>
			{showIcon && <styles.ButtonIcon iconName={icon} />}
			{showText && <styles.ButtonText>{children}</styles.ButtonText>}
		</ButtonWrapper>
	);
};

Button.propTypes = {
	type: string,
	icon: string,
	children: string,
	disabled: bool,
	active: bool,
	rounded: bool,
	circle: bool,
	variant: string,
	semanticColor: string,
};

Button.defaultProps = {
	type: 'full',
	icon: '',
	children: '',
	disabled: false,
	active: false,
	rounded: false,
	circle: false,
	variant: 'filled',
	semanticColor: 'primary',
};

export default Button;
