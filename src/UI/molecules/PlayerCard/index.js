import React, {useState} from 'react';
import {string} from 'prop-types';
import styles from './styles';

const VideoBackground = ({placeholderImg, firstName, lastName, video}) => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	return (
		<>
			{!videoLoaded && <styles.DisplayImg src={placeholderImg} alt={`${firstName} ${lastName}`} />}
			<styles.DisplayVideo
				src={`https://www.youtube.com/embed/${video}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&end=25&loop=1&playlist=${video}`}
				width="1119"
				height="629"
				frameBorder="0"
				allowfullscreen
				title="video"
				onLoad={() => setVideoLoaded(true)}
			/>
		</>
	);
};

VideoBackground.propTypes = {
	firstName: string.isRequired,
	lastName: string.isRequired,
	placeholderImg: string.isRequired,
	video: string.isRequired,
};

const PlayerCard = ({firstName, lastName, countryCode, placeholderImg, video, ...props}) => {
	const [hover, setHover] = useState(false);

	return (
		<styles.CardContainer
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			{...props}>
			<styles.DisplayWrapper>
				{hover ? (
					<VideoBackground
						placeholderImg={placeholderImg}
						firstName={firstName}
						lastName={lastName}
						video={video}
					/>
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
