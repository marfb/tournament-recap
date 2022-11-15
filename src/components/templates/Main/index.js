import React, {useEffect, useState} from 'react';
import {node, oneOfType, arrayOf} from 'prop-types';
import {debounce} from 'utils';
import Styles from './styles';

const Main = ({children, ...props}) => {
	if (!children) return null;
	const [dynamicPadding, setDynamicPadding] = useState(false);

	const paddingScrollHandler = debounce(
		() => (window.scrollY >= 40 ? setDynamicPadding(true) : setDynamicPadding(false)),
		200
	);

	useEffect(() => {
		window.addEventListener('scroll', paddingScrollHandler);
		return () => window.removeEventListener('scroll', paddingScrollHandler);
	}, []);

	return (
		<Styles.LayoutContainer
			{...props}
			initial={{x: '-100%', opacity: 0}}
			animate={{x: '0%', opacity: 1}}
			transition={{type: 'spring', stiffness: 50, ease: 'circIn', duration: 0.4}}
			$addPadding={dynamicPadding}>
			{children}
		</Styles.LayoutContainer>
	);
};

Main.propTypes = {
	children: oneOfType([node, arrayOf([node])]),
};

Main.defaultProps = {
	children: [],
};

export default Main;
