import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {setCache, getCache} from 'utils';

const Player = () => {
	const [playerData, setPlayerData] = useState({});
	const {slug} = useParams();

	const fetchPlayerData = async () => {
		const cachedPlayerData = getCache(slug);
		if (cachedPlayerData) return setPlayerData(cachedPlayerData);
		const {data} = await axios(`./data/players/${slug}.json`);
		if (data) setPlayerData(data);
		return setCache(slug, data, 1);
	};

	useEffect(() => {
		fetchPlayerData();
	}, []);

	console.log('playerData ---->', playerData);

	if (!Object.keys(playerData).length) return <p>no data</p>;

	return <p>data loaded</p>;
};

export default Player;
