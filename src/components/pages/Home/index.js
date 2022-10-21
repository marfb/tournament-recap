import React, {useEffect} from 'react';
import styles from './styles';

const Home = () => {
	useEffect(() => {
		console.log('loaded');
	}, []);
	return (
		// eslint-disable-next-line react/no-unstable-nested-components
		<styles.PageContainer Header={() => <div>Header</div>} Footer={() => <div>Footer</div>}>
			<styles.ButtonStylesRow>
				<styles.ButtonStylesColumn>
					<styles.VariantTitle>Filled Buttons</styles.VariantTitle>
					<styles.TypeTitle>Button with icon and text</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck">
						Este es un texto que tiene que ser muy largo
					</styles.CustomButton>
					<styles.CustomButton icon="FiCheck">Continue</styles.CustomButton>

					<styles.TypeTitle>Button with icon and text active</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" active>
						Este es otro boton
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" />

					<styles.TypeTitle>Button with text</styles.TypeTitle>
					<styles.CustomButton>Subscribe!</styles.CustomButton>

					<styles.TypeTitle>Button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" disabled />

					<styles.TypeTitle>Button with text disabled</styles.TypeTitle>
					<styles.CustomButton disabled>Subscribe!</styles.CustomButton>

					<styles.TypeTitle>Circled button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" circle />

					<styles.TypeTitle>Circled button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" circle disabled />

					<styles.TypeTitle>Rounded button with text</styles.TypeTitle>
					<styles.CustomButton rounded>Subscribe!</styles.CustomButton>

					<styles.TypeTitle>Rounded button with text disabled</styles.TypeTitle>
					<styles.CustomButton disabled rounded>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" rounded />

					<styles.TypeTitle>Rounded button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" rounded disabled />
				</styles.ButtonStylesColumn>
				<styles.ButtonStylesColumn>
					<styles.VariantTitle>Outline Buttons</styles.VariantTitle>
					<styles.TypeTitle>Button with icon and text</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" variant="outline">
						Este es un texto que tiene que ser muy largo
					</styles.CustomButton>
					<styles.CustomButton icon="FiCheck" variant="outline">
						Continue
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon and text active</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" variant="outline" active>
						Este es otro boton
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="outline" />

					<styles.TypeTitle>Button with text</styles.TypeTitle>
					<styles.CustomButton variant="outline">Subscribe!</styles.CustomButton>

					<styles.TypeTitle>Button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="outline" disabled />

					<styles.TypeTitle>Button with text disabled</styles.TypeTitle>
					<styles.CustomButton variant="outline" disabled>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Circled button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="outline" circle />

					<styles.TypeTitle>Circled button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="outline" circle disabled />

					<styles.TypeTitle>Rounded button with text</styles.TypeTitle>
					<styles.CustomButton variant="outline" rounded>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with text disabled</styles.TypeTitle>
					<styles.CustomButton variant="outline" disabled rounded>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="outline" rounded />

					<styles.TypeTitle>Rounded button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="outline" rounded disabled />
				</styles.ButtonStylesColumn>
				<styles.ButtonStylesColumn>
					<styles.VariantTitle>Empty Buttons</styles.VariantTitle>
					<styles.TypeTitle>Button with icon and text</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" variant="empty">
						Este es un texto que tiene que ser muy largo
					</styles.CustomButton>
					<styles.CustomButton icon="FiCheck" variant="empty">
						Continue
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon and text active</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" variant="empty" active>
						Este es otro boton
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="empty" />

					<styles.TypeTitle>Button with text</styles.TypeTitle>
					<styles.CustomButton variant="empty">Subscribe!</styles.CustomButton>

					<styles.TypeTitle>Button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="empty" disabled />

					<styles.TypeTitle>Button with text disabled</styles.TypeTitle>
					<styles.CustomButton variant="empty" disabled>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Circled button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="empty" circle />

					<styles.TypeTitle>Circled button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="empty" circle disabled />

					<styles.TypeTitle>Rounded button with text</styles.TypeTitle>
					<styles.CustomButton variant="empty" rounded>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with text disabled</styles.TypeTitle>
					<styles.CustomButton variant="empty" disabled rounded>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="empty" rounded />

					<styles.TypeTitle>Rounded button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="empty" rounded disabled />
				</styles.ButtonStylesColumn>
			</styles.ButtonStylesRow>
		</styles.PageContainer>
	);
};

export default Home;
