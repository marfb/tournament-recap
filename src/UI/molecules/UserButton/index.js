import {func, string} from 'prop-types';
import React from 'react';
import {validateFunction, validateString} from 'utils';
import {getColor} from 'theme/utils';
import styles from './styles';

const UserButton = ({text, icon, imageUrl, onClick, size, ...props}) => {
	const validatedImageUrl = imageUrl && validateString(imageUrl) ? imageUrl : '';
	const validatedIcon = icon && validateString(icon) ? icon : 'FiUser';
	const showUserImage = Boolean(validatedImageUrl);
	const validatedText = text && validateString(text) ? text : '';
	const validatedOnClick = onClick && validateFunction(onClick) ? onClick : () => {};
	const validatedSize = size && validateString(size) ? size : 'normal';

	return (
		<styles.UserButton onClick={validatedOnClick} size={validatedSize} {...props}>
			<styles.IconImgWrapper size={validatedSize}>
				{showUserImage && <styles.UserImg src={validatedImageUrl} alt="User" />}
				{!showUserImage && (
					<styles.UserIcon
						iconName={validatedIcon}
						iconSize={validatedSize}
						color={getColor('grayscale', '800')}
					/>
				)}
			</styles.IconImgWrapper>
			{validatedText && <styles.UserText size={validatedSize}>{validatedText}</styles.UserText>}
		</styles.UserButton>
	);
};

UserButton.propTypes = {
	text: string,
	icon: string,
	imageUrl: string,
	onClick: func,
	size: string,
};

UserButton.defaultProps = {
	text: '',
	icon: '',
	imageUrl: '',
	onClick: () => {},
	size: 'normal',
};

export default UserButton;
