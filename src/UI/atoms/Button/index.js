import React from 'react';
import {bool, string} from 'prop-types';
import {validateString, validateBoolean} from 'utils';
import styles from './styles';

const Button = ({
	icon,
	children,
	disabled,
	focus,
	rounded,
	circle,
	variant,
	semanticColor,
	switchOrder,
	active,
	...props
}) => {
	const showIcon = icon && validateString(icon);
	const showText = children && validateString(children);
	const isDisabled = validateBoolean(disabled) ? disabled : false;
	const isOnFocus = validateBoolean(focus) ? focus : false;
	const isActive = validateBoolean(active) ? active : false;
	const isRounded = validateBoolean(rounded) ? rounded : false;
	const isCircle = validateBoolean(circle) && !showText ? circle : false;
	const isOrderSwitched =
		validateBoolean(switchOrder) && showIcon && showText ? switchOrder : false;

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
			focus={isOnFocus}
			rounded={isRounded}
			circle={isCircle}
			semanticColor={semanticColor}
			switchOrder={isOrderSwitched}
			active={isActive}
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
	focus: bool,
	rounded: bool,
	circle: bool,
	variant: string,
	semanticColor: string,
	switchOrder: bool,
	active: bool,
};

Button.defaultProps = {
	type: 'full',
	icon: '',
	children: '',
	disabled: false,
	focus: false,
	rounded: false,
	circle: false,
	variant: 'filled',
	semanticColor: 'primary',
	switchOrder: false,
	active: false,
};

export default Button;
