import React, {useState, useEffect} from 'react';
import {bool, func, number, oneOfType, string} from 'prop-types';
import {validateBoolean, validateString, validateNumber, validateFunction} from 'utils';
import {getColor} from 'theme/utils';
import styles from './styles';

const getLabelContent = ({validatedPlaceholder, labelFloated, hasLabel, value, label}) => {
	if (validatedPlaceholder && labelFloated && hasLabel && String(value)) return label;
	if (!validatedPlaceholder && labelFloated && hasLabel) return label;
	if (!validatedPlaceholder && !labelFloated && hasLabel) return label;
	return '';
};

const Input = ({
	onChange,
	label,
	floatingLabel,
	value,
	placeholder,
	onFocus,
	onBlur,
	disabled,
	error,
	errorMessage,
	type,
	leftIcon,
	rightIcon,
	...props
}) => {
	const [labelFloated, setLabelFloated] = useState(false);
	const hasLabel = label && validateString(label);
	const validatedPlaceholder = placeholder && validateString(placeholder) ? placeholder : '';
	const showLabelFloated = validateBoolean(floatingLabel) && floatingLabel;
	const labelContent = getLabelContent({
		validatedPlaceholder,
		labelFloated,
		hasLabel,
		value,
		label,
	});
	const validatedValue = validateString(value) || validateNumber(value) ? value : '';
	const validatedFocusFunction = onFocus && validateFunction(onFocus) ? onFocus : () => {};
	const validatedBlurFunction = onBlur && validateFunction(onBlur) ? onBlur : () => {};
	const validatedErrorMessage = errorMessage && validateString(errorMessage) ? errorMessage : '';
	const validatedType = type && validateString(type) ? type : 'text';
	const validatedLeftIcon = leftIcon && validateString(leftIcon) ? leftIcon : '';
	const validatedRightIcon = rightIcon && validateString(rightIcon) ? rightIcon : '';
	const isDisabled = validateBoolean(disabled) ? disabled : false;
	const hasError = validateBoolean(error) ? error : false;
	const showErrorMessage = hasError && validatedErrorMessage;

	const handleOnchange = (e) => {
		const inputValue = e.target.value;
		if (showLabelFloated && inputValue) setLabelFloated(true);
		if (showLabelFloated && !inputValue) setLabelFloated(false);
		onChange(e);
	};

	const handleInputFocus = (e) => {
		validatedFocusFunction(e);
	};

	const handleInputBlur = (e) => {
		validatedBlurFunction(e);
	};

	useEffect(() => {
		if (String(validatedValue) && hasLabel && !labelFloated) {
			setLabelFloated(true);
		}
	}, []);

	return (
		<styles.InputContainer {...props}>
			{hasLabel && (
				<styles.InputLabel
					floatLabel={labelFloated}
					withLeftIcon={validatedLeftIcon}
					withRightIcon={validatedRightIcon}>
					{labelContent}
				</styles.InputLabel>
			)}
			{validatedPlaceholder && !validatedValue && (
				<styles.InputPlaceholder
					withLeftIcon={validatedLeftIcon}
					withRightIcon={validatedRightIcon}>
					{validatedPlaceholder}
				</styles.InputPlaceholder>
			)}
			{validatedLeftIcon && (
				<styles.LeftIcon iconName={validatedLeftIcon} color={getColor('text', 'dark')} />
			)}
			<styles.Input
				onChange={(e) => handleOnchange(e)}
				onFocus={(e) => handleInputFocus(e)}
				onBlur={(e) => handleInputBlur(e)}
				value={validatedValue}
				disabled={isDisabled}
				error={hasError}
				type={validatedType}
				withLeftIcon={validatedLeftIcon}
				withRightIcon={validatedRightIcon}
			/>
			{validatedRightIcon && (
				<styles.RightIcon iconName={validatedRightIcon} color={getColor('text', 'dark')} />
			)}
			{showErrorMessage && <styles.ErrorMessage>{validatedErrorMessage}</styles.ErrorMessage>}
		</styles.InputContainer>
	);
};

Input.propTypes = {
	onChange: func,
	label: string,
	floatingLabel: bool,
	value: oneOfType([string, number]),
	placeholder: string,
	onFocus: func,
	onBlur: func,
	disabled: bool,
	error: bool,
	errorMessage: string,
	type: string,
	leftIcon: string,
	rightIcon: string,
};

Input.defaultProps = {
	onChange: () => {},
	label: '',
	floatingLabel: false,
	value: '',
	placeholder: '',
	onFocus: () => {},
	onBlur: () => {},
	disabled: false,
	error: false,
	errorMessage: '',
	type: 'text',
	leftIcon: '',
	rightIcon: '',
};

export default Input;
