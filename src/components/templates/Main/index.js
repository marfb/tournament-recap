import React from 'react';
import {node, oneOfType, arrayOf} from 'prop-types';
import Header from 'UI/organisms/Header';
import Footer from 'UI/organisms/Footer';
import Styles from './styles';

const Main = ({children, ...props}) => {
	if (!children) return null;
	return (
		<Styles.LayoutContainer {...props}>
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
