import {useEffect, useState} from 'react';
import {resizeCalc} from 'theme/utils';

const useDeviceWidth = () => {
	const [currentDevice, setCurrentDevice] = useState(resizeCalc(window.innerWidth));

	const resizeHandler = () => setCurrentDevice(resizeCalc(window.innerWidth));

	useEffect(() => {
		window.addEventListener('resize', resizeHandler);
		return () => window.addEventListener('resize', resizeHandler);
	}, []);

	return currentDevice;
};

export default useDeviceWidth;
