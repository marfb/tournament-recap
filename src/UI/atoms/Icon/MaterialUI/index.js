import React, {useMemo} from 'react';
import {string} from 'prop-types';
import {IconContext} from 'react-icons';
import * as MaterialDesign from 'react-icons/fi';
import {validateString} from 'utils';
import styles from './styles';

const MuiIcon = ({iconName, color, size, title, ...props}) => {
	if (!iconName || !validateString(iconName)) return null;

	const Icon = MaterialDesign[iconName];
	if (!Icon) return null;

	const validColor = color && validateString(color) ? color : '#212529';
	const validSize = size && validateString(size) ? size : '100%';
	const validTitle = title && validateString(title) ? title : '';

	const iconValue = useMemo(
		() => ({color: validColor, size: validSize, title: validTitle}),
		[validColor, validSize, validTitle]
	);

	return (
		<styles.IconWrapper {...props}>
			<IconContext.Provider value={iconValue}>
				<Icon />
			</IconContext.Provider>
		</styles.IconWrapper>
	);
};

MuiIcon.propTypes = {
	iconName: string.isRequired,
	color: string,
	size: string,
	title: string,
};

MuiIcon.defaultProps = {
	color: '#212529',
	size: '100%',
	title: '',
};

export default MuiIcon;
