import React, {useEffect, useState} from 'react';
import {node, oneOfType, arrayOf} from 'prop-types';
import {debounce} from 'utils';
import Header from 'UI/organisms/Header';
import Footer from 'UI/organisms/Footer';
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
		<Styles.LayoutContainer addPadding={dynamicPadding} {...props}>
			<Header />
			{children}
			<Footer />
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
