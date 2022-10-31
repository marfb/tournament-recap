import Main from 'components/templates/Main';
import styled from 'styled-components';
import {getColor} from 'theme/utils';
import Text from 'UI/atoms/Text';

const PageContainer = styled(Main)`
	background-color: ${getColor('surface', 'pagebackground')};
`;

const PlayersWrapper = styled.div``;

const PlayersTitleWrapper = styled.div``;

const PlayersTitle = styled(Text)``;

export default {PageContainer, PlayersWrapper, PlayersTitleWrapper, PlayersTitle};
