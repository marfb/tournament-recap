import React from 'react';
import RoutedApp from 'routes';
import {BrowserRouter} from 'react-router-dom';

const App = () => (
	<React.StrictMode>
		<BrowserRouter>
			<RoutedApp />
		</BrowserRouter>
	</React.StrictMode>
);

export default App;
