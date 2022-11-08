import React, {useState, useEffect} from 'react';
import {arrayOf, func, shape, string} from 'prop-types';
import {debounce} from 'utils';
import Logo from 'assets/Logo';
import styles from './styles';

// eslint-disable-next-line no-unused-vars
const Header = ({searchBarHandler, loggedUser, menuOptions}) => {
	const [scrollHeader, setScrollHeader] = useState(false);

	const scrollHandler = debounce(
		() => (window.scrollY >= 80 ? setScrollHeader(true) : setScrollHeader(false)),
		200
	);

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<styles.HeaderContainer scrollHeader={scrollHeader}>
			<styles.MainHeader>
				<styles.MainHeaderWrapper>
					<styles.LogoWrapper>
						<Logo />
						{/* <styles.LogoImg src={logo} alt="Logo Copa Mundial de la FIFA" /> */}
					</styles.LogoWrapper>
					<styles.ButtonsWrapper>
						{/* 						<styles.HeaderButton variant="empty">Inicio</styles.HeaderButton>
						<styles.HeaderButton variant="empty">Contacto</styles.HeaderButton> */}
					</styles.ButtonsWrapper>
					<styles.SearchWrapper>
						{/* <styles.SearchBar inputLabel="Player" buttonText="Buscar" /> */}
					</styles.SearchWrapper>
					<styles.UserWrapper>{/* <styles.User /> */}</styles.UserWrapper>
				</styles.MainHeaderWrapper>
			</styles.MainHeader>
		</styles.HeaderContainer>
	);
};

Header.propTypes = {
	searchBarHandler: func,
	loggedUser: shape({userName: string}),
	menuOptions: arrayOf(
		shape({
			label: string,
			link: string,
			icon: string,
		})
	),
};

Header.defaultProps = {
	searchBarHandler: () => {},
	loggedUser: {},
	menuOptions: [],
};

export default Header;
