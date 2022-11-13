import React from 'react';
import RoutedApp from 'routes';
import {BrowserRouter} from 'react-router-dom';
import Header from 'UI/organisms/Header';
import Footer from 'UI/organisms/Footer';

const App = () => (
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<RoutedApp />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);

export default App;
