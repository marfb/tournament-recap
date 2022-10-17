import React, {useEffect} from 'react';
import Main from 'components/templates/Main';

const Home = () => {
	useEffect(() => {
		console.log('loaded');
	}, []);
	return (
		// eslint-disable-next-line react/no-unstable-nested-components
		<Main Header={() => <div>Header</div>} Footer={() => <div>Footer</div>}>
			<div>Body1</div>
			<div>Body2</div>
		</Main>
	);
};

export default Home;
