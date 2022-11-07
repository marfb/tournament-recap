import React, {useState} from 'react';
import {string} from 'prop-types';
import styles from './styles';

const PlayerCard = ({firstName, lastName, countryCode, placeholderImg, video, ...props}) => {
	const [hover, setHover] = useState(false);
	return (
		<styles.CardContainer
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			{...props}>
			<styles.DisplayWrapper>
				{hover ? (
					<styles.DisplayVideo src={video} muted loop autoPlay poster={placeholderImg} />
				) : (
					<styles.DisplayImg src={placeholderImg} alt={`${firstName} ${lastName}`} />
				)}
			</styles.DisplayWrapper>
			<styles.CountryWrapper>
				<styles.CountryFlag className={`fi fi-${countryCode}`} />
			</styles.CountryWrapper>
			<styles.NameWrapper>
				<styles.PlayerName>{`${firstName} ${lastName}`}</styles.PlayerName>
			</styles.NameWrapper>
		</styles.CardContainer>
	);
};

PlayerCard.propTypes = {
	firstName: string.isRequired,
	lastName: string.isRequired,
	countryCode: string.isRequired,
	placeholderImg: string.isRequired,
	video: string,
};

PlayerCard.defaultProps = {
	video: '',
};

export default PlayerCard;
