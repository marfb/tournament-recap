import React, {useState} from 'react';
import UserButton from 'UI/molecules/UserButton';
import styles from './styles';

const Theme = () => {
	const [valA, setValA] = useState('');
	const [valB, setValB] = useState('disabled');
	const [valC, setValC] = useState('Error');
	const [valD, setValD] = useState('Martín');
	const [valE, setValE] = useState('');
	const [valF, setValF] = useState('');
	const [valG, setValG] = useState(0);
	const [valH, setValH] = useState('');
	const img =
		'https://pps.whatsapp.net/v/t61.24694-24/103357454_2700359136914535_415206517416513018_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSfpRc2N5_TuxzCGq38HvBoQxeZ3ijZF9-FDsRukWwu7Q&oe=6366A104';
	return (
		// eslint-disable-next-line react/no-unstable-nested-components
		<styles.PageContainer Header={() => <div>Header</div>} Footer={() => <div>Footer</div>}>
			<styles.InputsStylesRow>
				<styles.InputsStylesColumn>
					<styles.CustomInput onChange={(e) => setValA(e.target.value)} value={valA} />
					<styles.CustomInput
						onChange={(e) => setValC(e.target.value)}
						value={valC}
						error={valC === 'Error'}
						errorMessage="Show error while value is === 'Error'"
					/>
					<styles.CustomInput onChange={(e) => setValB(e.target.value)} value={valB} disabled />
					<styles.CustomInput
						onChange={(e) => setValD(e.target.value)}
						value={valD}
						label="Name"
						placeholder="Ingrese su nombre"
						floatingLabel
					/>
					<styles.CustomInput
						onChange={(e) => setValE(e.target.value)}
						value={valE}
						label="Password"
						floatingLabel
						type="password"
					/>
					<styles.CustomInput
						onChange={(e) => setValG(e.target.value)}
						value={valG}
						label="Password"
						floatingLabel
						type="password"
						rightIcon="FiLock"
					/>
					<styles.CustomInput
						onChange={(e) => setValF(e.target.value)}
						value={valF}
						label="Amount"
						floatingLabel
						leftIcon="FiDollarSign"
					/>
					<styles.CustomInput
						onChange={(e) => setValH(e.target.value)}
						value={valH}
						label="Icons"
						floatingLabel
						leftIcon="FiArrowLeft"
						rightIcon="FiArrowRight"
					/>
				</styles.InputsStylesColumn>
			</styles.InputsStylesRow>
			<styles.InputsStylesRow>
				<styles.InputsStylesColumn>
					<UserButton imageUrl={img} icon="FiUserCheck" text="Martín" size="mini" />
					<UserButton text="Martín" size="mini" />
					<UserButton imageUrl={img} icon="FiUserCheck" text="Martín" />
					<UserButton text="Martín" />
					<UserButton imageUrl={img} icon="FiUserCheck" text="Martín" size="big" />
					<UserButton text="Martín" size="big" />
				</styles.InputsStylesColumn>
			</styles.InputsStylesRow>
		</styles.PageContainer>
	);
};

export default Theme;
