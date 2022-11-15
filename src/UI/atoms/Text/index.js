import React from 'react';
import {node, arrayOf, oneOfType} from 'prop-types';
import styles from './styles';

const Text = React.forwardRef(({children, ...props}, ref) => {
	if (!children) return null;
	return (
		<styles.Text {...props} ref={ref}>
			{children}
		</styles.Text>
	);
});

Text.propTypes = {
	children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default Text;
