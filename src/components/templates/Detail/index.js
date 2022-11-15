import React from 'react';
import {node, oneOfType, arrayOf} from 'prop-types';
import Styles from './styles';

const Detail = ({children, ...props}) => {
	if (!children) return null;

	return (
		<Styles.DetailLayoutContainer
			{...props}
			initial={{x: '100%', opacity: 0}}
			animate={{x: '0%', opacity: 1}}
			transition={{type: 'spring', stiffness: 45, ease: 'easeIn', duration: 0.4}}>
			{children}
		</Styles.DetailLayoutContainer>
	);
};

Detail.propTypes = {
	children: oneOfType([node, arrayOf([node])]),
};

Detail.defaultProps = {
	children: [],
};

export default Detail;
