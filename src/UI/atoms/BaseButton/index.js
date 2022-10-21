import React from 'react';
import {node, arrayOf, oneOfType} from 'prop-types';
import styles from './styles';

const BaseButton = ({children, ...props}) => {
	if (!children) return null;
	return <styles.Button {...props}>{children}</styles.Button>;
};

BaseButton.propTypes = {
	children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default BaseButton;
