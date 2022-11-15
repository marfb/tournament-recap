import styled from 'styled-components';
import Detail from 'components/templates/Detail';
import Text from 'UI/atoms/Text';
import {motion} from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {getColor} from 'theme/utils';

const AnimatedComponent = (comp) => motion(comp);

const PlayerContainer = styled(Detail)`
	height: 600px;
	overflow: hidden;
	@media (max-width: 1024px) {
	}
`;

const LoaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

const PlayerWrapper = styled.div`
	visibility: ${({showContent}) => (showContent ? 'visible' : 'hidden')};
	position: relative;
`;

const HeroWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 600px;
	overflow: hidden;
	@media (max-width: 1024px) {
		height: 100%;
		overflow: visible;
	}
`;

const HeroImg = styled.img`
	position: absolute;
	object-fit: cover;
	width: 100%;
	opacity: 0.2;
	top: 0;
	left: 0;
	z-index: -1;
	@media (max-width: 1024px) {
		object-fit: none;
		margin: 0;
		height: 150%;
		object-position: top;
	}
`;

const HeroInfoWrapper = styled(Tilt)`
	display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	justify-content: center;
	align-items: center;
	grid-gap: 15px;
	width: 100%;
	max-width: 1280px;
	height: 100%;
	margin: 0 auto;
	@media (max-width: 1024px) {
		padding-top: 120px;
		grid-template-columns: repeat(auto-fit, 150px);
	}
`;

const DataWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
	}
`;

const DataTitle = styled(AnimatedComponent(Text))`
	font-size: 30px;
	margin: 0;
	padding: 0;
	color: ${getColor('primary', 'main')};
	font-weight: 200;
	text-align: center;
	max-height: 45px;
	text-overflow: hidden;
	@media (max-width: 1024px) {
		font-size: 16px;
	}
`;

const DataImg = styled(motion.img)`
	height: 150px;
	@media (max-width: 1024px) {
		height: 80px;
	}
`;

const TeamWrapper = styled(DataWrapper)``;

const CountryName = styled(DataTitle)``;

const FederationImg = styled(DataImg)``;

const PlayerNameWrapper = styled(DataWrapper)``;

const PlayerName = styled(DataTitle)``;

const PlayerImage = styled(DataImg)`
	border-radius: 15px;
`;

const ClubWrapper = styled(DataWrapper)``;

const ClubName = styled(DataTitle)``;

const ClubImg = styled(DataImg)``;

const StatsContainer = styled(DataWrapper)`
	margin: 0 auto;
	align-items: flex-start;
`;

const StatWrapper = styled(motion.div)`
	display: flex;
	@media (max-width: 768px) {
	}
`;

const StatName = styled(AnimatedComponent(Text))`
	font-size: 25px;
	font-weight: 600;
	color: ${getColor('primary', 'main')};
	@media (max-width: 1024px) {
		font-size: 12px;
	}
`;

const StatValue = styled(AnimatedComponent(Text))`
	font-size: 25px;
	font-weight: 200;
	color: ${getColor('primary', 'main')};
	margin-left: 15px;
	@media (max-width: 1024px) {
		font-size: 12px;
		margin-left: 5px;
	}
`;

export default {
	PlayerContainer,
	LoaderWrapper,
	PlayerWrapper,
	HeroWrapper,
	HeroInfoWrapper,
	TeamWrapper,
	HeroImg,
	PlayerNameWrapper,
	PlayerName,
	CountryName,
	FederationImg,
	PlayerImage,
	StatsContainer,
	StatWrapper,
	StatName,
	StatValue,
	ClubWrapper,
	ClubName,
	ClubImg,
};
