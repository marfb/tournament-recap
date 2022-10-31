import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Buttons from 'components/pages/Theme/Buttons';
import Inputs from 'components/pages/Theme/Inputs';
import Home from 'components/pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		// loader: rootLoader,
		children: [],
	},
	{
		path: '/theme/buttons',
		element: <Buttons />,
		// loader: rootLoader,
		children: [],
	},
	{
		path: '/theme/inputs',
		element: <Inputs />,
		// loader: rootLoader,
		children: [],
	},
]);

export default router;
