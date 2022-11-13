import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PlayerCard from 'UI/molecules/PlayerCard';
import {validateArray, setCache, getCache} from 'utils';
import useDeviceWidth from 'hooks/useDeviceWidth';
import {motion} from 'framer-motion';
import styles from './styles';

const Home = () => {
	const [playersData, setPlayersData] = useState([]);
	const [playersFiltered, setPlayersFiltered] = useState([]);
	const [selectedGroup, setSelectedGroup] = useState('');
	const [selectedConf, setSelectedConf] = useState('');
	const [selectedOrder, setSelectedOrder] = useState({value: 'lastName-ASC', label: 'Name A-Z'});
	const [loading, setLoading] = useState(true);
	const device = useDeviceWidth();
	const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	const confederations = ['CAF', 'AFC', 'UEFA', 'CONCACAF', 'CONMEBOL'];
	const orderOptions = [
		{value: 'teamRank-ASC', label: 'FIFA Rank Descendent'},
		{value: 'teamRank-DESC', label: 'FIFA Rank Ascendent'},
		{value: 'lastName-ASC', label: 'Name A-Z'},
		{value: 'lastName-DESC', label: 'Name Z-A'},
	];
	const playersToRender = playersFiltered && Boolean(playersFiltered.length);
	const ClearButtonVariant = device !== 'desktop' ? '' : 'empty';
	const FilterButtonVariant = device !== 'desktop' ? 'outline' : 'empty';

	const onSelectHandler = (selectedValue) => setSelectedOrder(selectedValue);

	const getPlayers = async () => {
		setLoading(true);
		const {data} = await axios('./data/players.json');
		if (data && validateArray(data)) setPlayersData(data);
		if (!playersFiltered) setPlayersFiltered(data);
		setCache('playersData', data, 1);
		setTimeout(() => setLoading(false), 1500);
	};

	const handleFilterAndOrder = () => {
		let renderPlayers = [...playersData];
		if (selectedGroup)
			renderPlayers = renderPlayers.filter((pl) => pl.group === selectedGroup.toLowerCase());
		if (selectedConf)
			renderPlayers = renderPlayers.filter((pl) => pl.conf === selectedConf.toLowerCase());
		if (selectedOrder)
			renderPlayers = renderPlayers.sort((pl1, pl2) => {
				const [sortValue, sortDirection] = selectedOrder.value.split('-');
				if (sortDirection === 'DESC') {
					if (pl1[sortValue] > pl2[sortValue]) return -1;
					if (pl1[sortValue] < pl2[sortValue]) return 1;
					return 0;
				}
				if (pl1[sortValue] < pl2[sortValue]) return -1;
				if (pl1[sortValue] > pl2[sortValue]) return 1;
				return 0;
			});
		setPlayersFiltered(renderPlayers);
	};

	useEffect(() => {
		handleFilterAndOrder();
	}, [selectedGroup, selectedConf, selectedOrder]);

	useEffect(() => {
		const cachedData = getCache('playersData');
		if (cachedData && validateArray(cachedData)) {
			setPlayersData(cachedData);
			setPlayersFiltered(cachedData);
			setLoading(false);
		} else getPlayers();
	}, []);

	const PlayersWrapperVariants = {
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				when: 'beforeChildren',
			},
		},
		hidden: {
			opacity: 1,
		},
	};
	const PlayerCardVariants = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			duration: 1,
		},
	};

	const AnimatedPlayerCard = motion(PlayerCard);

	return (
		<styles.PageContainer>
			<styles.PlayersTitleWrapper>
				<styles.PlayersTitle>Greatests Players</styles.PlayersTitle>
				<styles.PlayersCopy>
					The following are the most outstanding players from each team participating in the next
					FIFA World Cup
				</styles.PlayersCopy>
			</styles.PlayersTitleWrapper>
			<styles.FiltersContainer>
				<styles.FiltersWrapper>
					<styles.FilterLabel>
						Filter by group:{' '}
						{Boolean(selectedGroup) && (
							<styles.ClearFilter
								semanticColor="danger"
								variant={ClearButtonVariant}
								onClick={() => setSelectedGroup('')}>
								Clear X
							</styles.ClearFilter>
						)}
					</styles.FilterLabel>
					{groups.map((group, idx) => (
						<styles.FilterOption
							variant={FilterButtonVariant}
							onClick={() => setSelectedGroup(group)}
							active={group === selectedGroup}
							key={`groupFilterBtn-${idx + 1}`}>
							{group}
						</styles.FilterOption>
					))}
				</styles.FiltersWrapper>
				<styles.FiltersWrapper>
					<styles.FilterLabel>
						Filter by confederation:{' '}
						{Boolean(selectedConf) && (
							<styles.ClearFilter
								semanticColor="danger"
								variant={ClearButtonVariant}
								onClick={() => setSelectedConf('')}>
								Clear X
							</styles.ClearFilter>
						)}
					</styles.FilterLabel>
					{confederations.map((conf, idx) => (
						<styles.FilterOption
							variant={FilterButtonVariant}
							onClick={() => setSelectedConf(conf)}
							active={conf === selectedConf}
							key={`confFilterBtn-${idx + 1}`}>
							{conf}
						</styles.FilterOption>
					))}
				</styles.FiltersWrapper>
				<styles.OrderWrapper>
					<styles.OrderSelect
						placeholder="Order by"
						options={orderOptions}
						onSelect={onSelectHandler}
						value={selectedOrder ? selectedOrder.label : 'Name A-Z'}
					/>
				</styles.OrderWrapper>
			</styles.FiltersContainer>
			<styles.PlayersContainer>
				{loading && <styles.Skeleton />}
				{!loading && playersToRender && (
					<styles.PlayersWrapper
						variants={PlayersWrapperVariants}
						initial="hidden"
						animate="visible">
						{playersFiltered.map(
							({firstName, lastName, slug, countryCode, country, teamRank, youtubeId}, idx) => (
								<AnimatedPlayerCard
									firstName={firstName}
									lastName={lastName}
									video={youtubeId}
									slug={slug}
									placeholderImg={`./media/players/${slug}.jpg`}
									countryCode={countryCode}
									country={country}
									teamRank={teamRank}
									key={`player-${idx + 1}`}
									variants={PlayerCardVariants}
									whileHover={{scale: 1.05, 'z-index': 50}}
									whileTap={{scale: 1.05, 'z-index': 50}}
								/>
							)
						)}
					</styles.PlayersWrapper>
				)}
				{!loading && !playersToRender && (
					<styles.EmptyFiltersWrapper>
						<styles.EmptyFiltersCopy>No results found!</styles.EmptyFiltersCopy>
						<styles.ClearFilters
							semanticColor="info"
							onClick={() => {
								setSelectedConf('');
								setSelectedGroup('');
							}}>
							Clear filters
						</styles.ClearFilters>
					</styles.EmptyFiltersWrapper>
				)}
			</styles.PlayersContainer>
		</styles.PageContainer>
	);
};

export default Home;
