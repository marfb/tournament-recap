import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PlayerCard from 'UI/molecules/PlayerCard';
import {validateArray} from 'utils';
import styles from './styles';

const Home = () => {
	const [playersData, setPlayersData] = useState([]);
	const [playersToRender, setPlayersToRender] = useState([]);
	const [selectedGroup, setSelectedGroup] = useState('');
	const [selectedConf, setSelectedConf] = useState('');
	const [selectedOrder, setSelectedOrder] = useState({
		value: 'lastName-ASC',
		label: 'Name Ascendent',
	});
	const [loading, setLoading] = useState(true);
	const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	const confederations = ['CAF', 'AFC', 'UEFA', 'CONCACAF', 'CONMEBOL'];
	const orderOptions = [
		{value: 'teamRank-ASC', label: 'FIFA Rank Descendent'},
		{value: 'teamRank-DESC', label: 'FIFA Rank Ascendent'},
		{value: 'lastName-ASC', label: 'Name A-Z'},
		{value: 'lastName-DESC', label: 'Name Z-A'},
	];

	const onSelectHandler = (selectedValue) => setSelectedOrder(selectedValue);

	const getPlayers = async () => {
		setLoading(true);
		const {data} = await axios('./data/players.json');
		if (data && validateArray(data)) setPlayersData(data);
		if (!playersToRender.length) setPlayersToRender(data);
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
		setPlayersToRender(renderPlayers);
	};

	useEffect(() => {
		getPlayers();
	}, []);

	useEffect(() => {
		handleFilterAndOrder();
	}, [selectedGroup, selectedConf, selectedOrder]);

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
								variant="empty"
								onClick={() => setSelectedGroup('')}>
								Clear X
							</styles.ClearFilter>
						)}
					</styles.FilterLabel>
					{groups.map((group, idx) => (
						<styles.FilterOption
							variant="empty"
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
								variant="empty"
								onClick={() => setSelectedConf('')}>
								Clear X
							</styles.ClearFilter>
						)}
					</styles.FilterLabel>
					{confederations.map((conf, idx) => (
						<styles.FilterOption
							variant="empty"
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
						value={selectedOrder.label}
					/>
				</styles.OrderWrapper>
			</styles.FiltersContainer>
			{loading && <styles.Skeleton />}
			<styles.PlayersWrapper>
				{!loading &&
					Boolean(playersToRender.length) &&
					playersToRender.map(({firstName, lastName, slug, countryCode, youtubeId}, idx) => (
						<PlayerCard
							firstName={firstName}
							lastName={lastName}
							video={youtubeId}
							placeholderImg={`./media/players/${slug}.jpg`}
							countryCode={countryCode}
							key={`player-${idx + 1}`}
						/>
					))}
			</styles.PlayersWrapper>
		</styles.PageContainer>
	);
};

export default Home;
