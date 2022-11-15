import {validateObject} from 'utils';

const getPlayerViewData = (playerData, teamData) => {
	if (!playerData || !validateObject(playerData) || !Object.keys(playerData).length) return {};
	if (!teamData || !validateObject(teamData) || !Object.keys(teamData).length) return {};
	const {playerProfile, heroImages} = playerData;
	const {additionalTeams, mainFacts} = teamData;
	const {
		playerName,
		country,
		playerImage,
		clubImage,
		club,
		internationalGames,
		internationalGoals,
		playerMainPosition,
	} = playerProfile;
	const {internationalRank} = mainFacts;
	const [federationLogoData] = additionalTeams;
	const [heroImage] = heroImages;
	return {
		playerName,
		country,
		federationLogo: federationLogoData.image.replace('/medium/', '/big/'),
		heroImage: heroImage.url.replace('/normal/', '/big/'),
		playerImage: playerImage.replace('/medium/', '/big/'),
		clubImage: clubImage.replace('/medium/', '/big/'),
		club,
		stats: [
			{stat: 'Games', value: internationalGames},
			{stat: 'Goals', value: internationalGoals !== '0' ? internationalGoals : '-'},
			{stat: 'Pos.', value: playerMainPosition},
			{stat: 'Fifa Rank', value: internationalRank},
		],
	};
};

export default getPlayerViewData;
