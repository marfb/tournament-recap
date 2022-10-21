import React from 'react';
import {node, arrayOf, oneOfType} from 'prop-types';
import styles from './styles';

const Text = ({children, ...props}) => {
	if (!children) return null;
	return <styles.Text {...props}>{children}</styles.Text>;
};

Text.propTypes = {
	children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default Text;
