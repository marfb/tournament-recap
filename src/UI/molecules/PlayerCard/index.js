import React, {useState} from 'react';
import {number, string} from 'prop-types';
import useDeviceWidth from 'hooks/useDeviceWidth';
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

const PlayerCard = React.forwardRef(
	(
		{firstName, lastName, countryCode, placeholderImg, video, country, teamRank, slug, ...props},
		ref
	) => {
		const [hover, setHover] = useState(false);
		const isDesktop = useDeviceWidth() === 'desktop';

		return (
			<styles.CardContainer {...props} ref={ref}>
				<styles.CardWrapper
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					to={`../${slug}`}>
					<styles.DisplayWrapper>
						{hover && isDesktop ? (
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
					<styles.CountryContainer>
						<styles.CountryWrapper>
							<styles.CountryFlag className={`fi fi-${countryCode}`} />
						</styles.CountryWrapper>
						<styles.CountryName>{country}</styles.CountryName>
						<styles.CountryRank>{`# ${teamRank}`}</styles.CountryRank>
					</styles.CountryContainer>
					<styles.NameWrapper>
						<styles.PlayerName>{`${firstName} ${lastName}`}</styles.PlayerName>
					</styles.NameWrapper>
				</styles.CardWrapper>
			</styles.CardContainer>
		);
	}
);

PlayerCard.propTypes = {
	firstName: string.isRequired,
	lastName: string.isRequired,
	countryCode: string.isRequired,
	country: string.isRequired,
	placeholderImg: string.isRequired,
	teamRank: number.isRequired,
	slug: string.isRequired,
	video: string,
};

PlayerCard.defaultProps = {
	video: '',
};

export default PlayerCard;
