import React, {useState} from 'react';
import {func, string, bool} from 'prop-types';
import {validateFunction, validateString, validateBoolean} from 'utils';
import styles from './styles';

const Search = ({
	inputLabel,
	placeholder,
	onSubmit,
	buttonText,
	onQuickSearch,
	showButton,
	...props
}) => {
	const [inputValue, setInputValue] = useState('');
	const validLabel = inputLabel && validateString(inputLabel) ? inputLabel : 'Búsqueda';
	const validPlaceholder = placeholder && validateString(placeholder) ? placeholder : '';
	const validOnSubmit = onSubmit && validateFunction(onSubmit) ? onSubmit : () => {};
	const validButtonText = buttonText && validateString(buttonText) ? buttonText : 'Buscar';
	const validOnQuickSearch =
		onQuickSearch && validateFunction(onQuickSearch) ? onQuickSearch : () => {};
	const isButtonShowed = validateBoolean(showButton) && showButton;

	const onChangeHandler = (e) => {
		validOnQuickSearch(e.target.value);
		setInputValue(e.target.value);
	};

	return (
		<styles.SearchContainer onSubmit={validOnSubmit} {...props}>
			<styles.SearchInput
				label={validLabel}
				placeholder={validPlaceholder}
				rightIcon="FiSearch"
				onChange={(e) => onChangeHandler(e)}
				value={inputValue}
				floatingLabel
			/>
			{isButtonShowed && (
				<styles.SearchButton variant="empty" onClick={validOnSubmit}>
					{validButtonText}
				</styles.SearchButton>
			)}
		</styles.SearchContainer>
	);
};

Search.propTypes = {
	inputLabel: string,
	placeholder: string,
	onSubmit: func,
	buttonText: string,
	onQuickSearch: func,
	showButton: bool,
};

Search.defaultProps = {
	inputLabel: 'Búsqueda',
	placeholder: '',
	onSubmit: () => {},
	buttonText: 'Buscar',
	onQuickSearch: () => {},
	showButton: false,
};

export default Search;
