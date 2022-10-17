import React from 'react';
import {node, oneOfType, arrayOf} from 'prop-types';
import Styles from './styles';

const Main = ({Header, Footer, children}) => {
	if (!Header || !Footer || !children) return null; // return safe component
	return (
		<Styles.LayoutContainer>
			<Header />
			{children}
			<Footer />
		</Styles.LayoutContainer>
	);
};

Main.propTypes = {
	Header: node,
	Footer: node,
	children: oneOfType([node, arrayOf([node])]),
};

Main.defaultProps = {
	Header: () => {},
	Footer: () => {},
	children: [],
};

export default Main;
