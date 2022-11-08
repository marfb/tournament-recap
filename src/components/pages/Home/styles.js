import styled from 'styled-components';
import {Dropdown} from 'react-dropdown-now';
import Main from 'components/templates/Main';
import {getColor} from 'theme/utils';
import Button from 'UI/atoms/Button';
import Text from 'UI/atoms/Text';
import CardsGrid from 'UI/organisms/Skeletons/CardsGrid';

const PageContainer = styled(Main)`
	background-color: ${getColor('surface', 'pagebackground')};
`;

const PlayersTitleWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	margin: 100px 0 150px;
`;

const PlayersTitle = styled(Text)`
	font-size: 42px;
	color: ${getColor('text', 'main')};
	font-weight: 600;
	margin: 15px auto;
`;

const PlayersCopy = styled(Text)`
	font-size: 22px;
	color: ${getColor('text', 'main')};
	font-weight: 300;
	margin: 10px auto;
`;

const FiltersContainer = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 110px auto 50px;
	display: flex;
	align-items: center;
	padding-bottom: 6px;
	border-bottom: 1px solid ${getColor('primary', 'dark')};
`;

const FiltersWrapper = styled.div`
	margin: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const OrderWrapper = styled(FiltersWrapper)`
	flex-grow: 2;
	display: flex;
	justify-content: flex-end;
`;

const FilterTitle = styled(Text)`
	font-size: 16px;
	color: ${getColor('text', 'main')};
`;

const FilterLabel = styled(Text)`
	position: absolute;
	font-size: 11px;
	top: -30px;
	left: 5px;
	color: ${getColor('primary', 'dark')};
`;

const FilterOption = styled(Button)`
	min-width: 30px;
	margin-right: 10px;
`;

const ClearFilter = styled(Button)`
	position: absolute;
	height: 20px;
	top: -3px;
	right: -60px;
`;

const OrderSelect = styled(Dropdown)`
	background-color: ${getColor('surface', 'pagebackground')};
	font-size: 12px;
	color: ${getColor('primary', 'dark')};
	font-family: Open Sans;
	border: none;
	padding: 6px;
	position: relative;
	width: 140px;
	height: 40px;
	cursor: pointer;
	z-index: 11;
	&:active,
	&:focus,
	&:focus-within,
	&:focus-visible {
		border: none;
		outline: none;
	}

	& .rdn-control-placeholder {
		display: flex;
		align-items: center;
	}

	& .rdn-control,
	& .rdn-control-placeholder,
	& .rdn-control-arrow,
	& .rdn-drop {
		background: transparent;
		position: absolute;
		top: 0;
		left: 0;
	}
	& .rdn-control-arrow-icon {
		display: none;
	}
	& .rdn-drop {
		top: 45px;
		height: 140px;
		width: 170px;
		width: 170px;
		backdrop-filter: blur(10px);
		padding: 0px;
	}
	& .rdn-drop-menu-option {
		height: 35px;
		padding: 5px 10px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		&:hover {
			background: ${getColor('surface', 'pagebackground')}BB;
			color: ${getColor('primary', 'main')};
		}
	}
`;

const PlayersWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 290px);
	justify-content: center;
	grid-gap: 5px;
	width: 100%;
	max-width: 1280px;
	margin: 20px auto;
`;

const Skeleton = styled(CardsGrid)`
	margin: -20px auto;
`;

export default {
	PageContainer,
	PlayersWrapper,
	PlayersTitleWrapper,
	PlayersTitle,
	PlayersCopy,
	FiltersContainer,
	FiltersWrapper,
	FilterTitle,
	FilterLabel,
	FilterOption,
	OrderWrapper,
	OrderSelect,
	ClearFilter,
	Skeleton,
};
