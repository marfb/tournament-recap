import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {setCache, getCache, validateObject} from 'utils';
import {ThreeDots} from 'react-loader-spinner';
import styles from './styles';
import getPlayerViewData from './utils';

const Player = () => {
	const [playerData, setPlayerData] = useState({});
	const [teamData, setTeamData] = useState({});
	const [loadingData, setLoadingData] = useState(true);
	const [heroImgLoading, setHeroImageLoading] = useState(true);
	const [contentLoading, setContentLoading] = useState(true);
	const [heroImgFallback, setHeroImgFallback] = useState('');
	const {slug} = useParams();

	const fetchPlayerData = async () => {
		const cachedPlayerData = getCache(slug);
		if (cachedPlayerData) return setPlayerData(cachedPlayerData);
		const {data} = await axios(`./data/players/${slug}.json`);
		if (data) setPlayerData(data);
		return setCache(slug, data, 1);
	};

	const fetchTeamData = async () => {
		const {playerProfile} = playerData;
		const {country} = playerProfile;
		const slugCountry = country
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.split(' ')
			.join('-');
		const cachedTeamData = getCache(slugCountry);
		if (cachedTeamData) {
			setTeamData(cachedTeamData);
			setLoadingData(false);
			return true;
		}
		const {data} = await axios(`./data/teams/${slugCountry}.json`);
		if (data) setTeamData(data);
		setLoadingData(false);
		setCache(slugCountry, data, 1);
		return true;
	};

	const {playerName, country, playerImage, federationLogo, heroImage, club, clubImage, stats} =
		getPlayerViewData(playerData, teamData);

	useEffect(() => {
		fetchPlayerData();
	}, []);

	useEffect(() => {
		if (playerData && validateObject(playerData) && Object.keys(playerData).length) {
			fetchTeamData();
		}
	}, [playerData]);

	useEffect(() => {
		if (!loadingData && !heroImgLoading) setContentLoading(false);
	}, [loadingData, heroImgLoading]);

	return (
		<styles.PlayerContainer>
			{contentLoading && (
				<styles.LoaderWrapper>
					<ThreeDots
						height="80"
						width="80"
						radius="9"
						color="#767676"
						ariaLabel="three-dots-loading"
						visible={contentLoading}
					/>
				</styles.LoaderWrapper>
			)}
			{!loadingData && Object.keys(teamData).length && (
				<styles.PlayerWrapper showContent={!contentLoading}>
					<styles.HeroWrapper>
						<styles.HeroImg
							src={heroImgFallback || heroImage}
							alt="Hero image"
							onError={() => {
								setHeroImgFallback(`./media/players/${slug}.jpg`);
							}}
							onLoad={() => setHeroImageLoading(false)}
						/>
						<styles.HeroInfoWrapper tiltMaxAngleX={15} tiltMaxAngleY={15} gyroscope>
							<styles.TeamWrapper>
								<styles.FederationImg src={federationLogo} alt={`${country} federation logo`} />
								<styles.CountryName>{country}</styles.CountryName>
							</styles.TeamWrapper>
							<styles.PlayerNameWrapper>
								<styles.PlayerImage src={playerImage} alt={`${playerName} profile picture`} />
								<styles.PlayerName>{playerName}</styles.PlayerName>
							</styles.PlayerNameWrapper>
							<styles.ClubWrapper>
								<styles.ClubImg src={clubImage} alt={`${club} logo`} />
								<styles.ClubName>{club}</styles.ClubName>
							</styles.ClubWrapper>
							<styles.StatsContainer>
								{stats.map(({stat, value}) => (
									<styles.StatWrapper>
										<styles.StatName>{stat}</styles.StatName>
										<styles.StatValue>{value}</styles.StatValue>
									</styles.StatWrapper>
								))}
							</styles.StatsContainer>
						</styles.HeroInfoWrapper>
					</styles.HeroWrapper>
				</styles.PlayerWrapper>
			)}
		</styles.PlayerContainer>
	);
};

export default Player;
