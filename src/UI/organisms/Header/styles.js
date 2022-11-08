import styled from 'styled-components';
import {getColor} from 'theme/utils';
import Button from 'UI/atoms/Button';
import Text from 'UI/atoms/Text';
import Search from 'UI/molecules/Search';
import UserButton from 'UI/molecules/UserButton';

const HeaderRow = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const TopHeader = styled(HeaderRow)`
	height: 15%;
	max-height: 28px;
	width: 100%;
	background-color: ${getColor('info', 'dark')};
`;

const TopHeaderWrapper = styled.div`
	width: 100%;
	max-width: 1280px; // dynamic responsive?
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

const TopHeaderText = styled(Text)`
	font-size: 12px;
	font-weight: 500;
	color: ${getColor('text', 'light')};
`;

const MainHeader = styled(HeaderRow)`
	height: 100%;
	width: 100%;
	background-color: transparent;
`;

const MainHeaderWrapper = styled.div`
	width: 100%;
	max-width: 1280px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

const LogoWrapper = styled.div`
	flex: 2;
	height: 100%;
	display: flex;
	align-items: center;
	max-width: 150px;
`;

const ButtonsWrapper = styled.div`
	flex: 6;
	display: flex;
	align-items: center;
	padding-left: 60px;
	display: none;
`;

const HeaderButton = styled(Button)`
	margin: 10px;
	font-size: 18px;
`;

const SearchWrapper = styled.div`
	flex: 4;
	display: none;
`;

const SearchBar = styled(Search)``;

const UserWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	display: none;
`;

const User = styled(UserButton)``;

const SubHeader = styled(HeaderRow)`
	height: 30%;
	background-color: green;
	max-height: 48px;
`;

const HeaderContainer = styled.header`
	height: 160px;
	transition: all 0.2s;
	background-color: transparent;

	${({scrollHeader}) =>
		scrollHeader &&
		`
            position: fixed;
			top: 0;
			left: 0;
            z-index: 99;
            height: 90px;
            width: 100%;
            transition: none;
            background-color: ${getColor('base', 'black')}55;
            backdrop-filter: blur(5px);
            transition: linear 0.2s;
            & ${TopHeader}, & ${SubHeader} {
                display: none;
            }

			& ${LogoWrapper} svg {
				height: 50px;
    			min-width: auto;
			}
        `}
`;

export default {
	HeaderContainer,
	TopHeader,
	TopHeaderWrapper,
	TopHeaderText,
	MainHeader,
	MainHeaderWrapper,
	LogoWrapper,
	ButtonsWrapper,
	HeaderButton,
	SearchWrapper,
	SearchBar,
	UserWrapper,
	User,
	SubHeader,
};
