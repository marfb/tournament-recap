import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Home from 'components/pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		// loader: rootLoader,
		children: [],
	},
]);

export default router;
