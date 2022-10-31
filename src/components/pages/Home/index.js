import React from 'react';
import PlayerCard from 'UI/molecules/PlayerCard';
import styles from './styles';

const Home = () => (
	<styles.PageContainer>
		<styles.PlayersWrapper>
			Hola
			<PlayerCard
				firstName="Lionel"
				lastName="Messi"
				video="./media/players/messi.mp4"
				placeholderImg="./media/players/messi.jpg"
				country="Argentina"
			/>
			<PlayerCard
				firstName="Akram"
				lastName="Afif"
				video="./media/players/akram-afif.mp4"
				placeholderImg="./media/players/akram-afif.jpg"
				country="Qatar"
			/>
		</styles.PlayersWrapper>
	</styles.PageContainer>
);

export default Home;
