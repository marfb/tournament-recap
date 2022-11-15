import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Buttons from 'components/pages/Theme/Buttons';
import Inputs from 'components/pages/Theme/Inputs';
import Home from 'components/pages/Home';
import Player from 'components/pages/Player';
import Header from 'UI/organisms/Header';
import Footer from 'UI/organisms/Footer';

const RoutedApp = () => {
	const location = useLocation();

	return (
		<>
			<Header showFixed={location.pathname !== '/'} />
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/:slug" element={<Player />} />
					<Route path="/theme/buttons" element={<Buttons />} />
					<Route path="/theme/inputs" element={<Inputs />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	);
};

export default RoutedApp;
