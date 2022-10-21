import React, {useState} from 'react';
import styles from './styles';

const Home = () => {
	const [color, setColor] = useState('primary');

	return (
		// eslint-disable-next-line react/no-unstable-nested-components
		<styles.PageContainer Header={() => <div>Header</div>} Footer={() => <div>Footer</div>}>
			<styles.ColorSelectorRow>
				<styles.ColorSelectorTitle>Please choose a color</styles.ColorSelectorTitle>
				<styles.ColorButton onClick={() => setColor('primary')} semanticColor="primary" active>
					Primary
				</styles.ColorButton>
				<styles.ColorButton onClick={() => setColor('secondary')} semanticColor="secondary" active>
					Secondary
				</styles.ColorButton>
				<styles.ColorButton onClick={() => setColor('success')} semanticColor="success" active>
					Success
				</styles.ColorButton>
				<styles.ColorButton onClick={() => setColor('info')} semanticColor="info" active>
					Info
				</styles.ColorButton>
				<styles.ColorButton onClick={() => setColor('warning')} semanticColor="warning" active>
					Warning
				</styles.ColorButton>
				<styles.ColorButton onClick={() => setColor('help')} semanticColor="help" active>
					Help
				</styles.ColorButton>
				<styles.ColorButton onClick={() => setColor('danger')} semanticColor="danger" active>
					Danger
				</styles.ColorButton>
				<styles.ColorButton
					onClick={() => setColor('primary')}
					variant="outline"
					disabled={color === 'primary'}>
					Reset
				</styles.ColorButton>
			</styles.ColorSelectorRow>
			<styles.ButtonStylesRow>
				<styles.ButtonStylesColumn>
					<styles.VariantTitle>Filled Buttons</styles.VariantTitle>
					<styles.TypeTitle>Button with icon and text</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" semanticColor={color}>
						Este es un texto que tiene que ser muy largo
					</styles.CustomButton>
					<styles.CustomButton icon="FiCheck" semanticColor={color}>
						Continue
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon and text active</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" active semanticColor={color}>
						Este es otro boton
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" semanticColor={color} />

					<styles.TypeTitle>Button with text</styles.TypeTitle>
					<styles.CustomButton semanticColor={color}>Subscribe!</styles.CustomButton>

					<styles.TypeTitle>Button with icon disabled</styles.TypeTitle>
					<styles.IconButton semanticColor={color} type="icon" icon="FiCheck" disabled />

					<styles.TypeTitle>Button with text disabled</styles.TypeTitle>
					<styles.CustomButton disabled semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Circled button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" semanticColor={color} circle />

					<styles.TypeTitle>Circled button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" semanticColor={color} circle disabled />

					<styles.TypeTitle>Rounded button with text</styles.TypeTitle>
					<styles.CustomButton rounded semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with text disabled</styles.TypeTitle>
					<styles.CustomButton disabled rounded semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" rounded semanticColor={color} />

					<styles.TypeTitle>Rounded button with icon disabled</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" semanticColor={color} rounded disabled />
				</styles.ButtonStylesColumn>
				<styles.ButtonStylesColumn>
					<styles.VariantTitle>Outline Buttons</styles.VariantTitle>
					<styles.TypeTitle>Button with icon and text</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" variant="outline" semanticColor={color}>
						Este es un texto que tiene que ser muy largo
					</styles.CustomButton>
					<styles.CustomButton icon="FiCheck" variant="outline" semanticColor={color}>
						Continue
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon and text active</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" variant="outline" active semanticColor={color}>
						Este es otro boton
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="outline" semanticColor={color} />

					<styles.TypeTitle>Button with text</styles.TypeTitle>
					<styles.CustomButton variant="outline" semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="outline"
						semanticColor={color}
						disabled
					/>

					<styles.TypeTitle>Button with text disabled</styles.TypeTitle>
					<styles.CustomButton variant="outline" disabled semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Circled button with icon</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="outline"
						circle
						semanticColor={color}
					/>

					<styles.TypeTitle>Circled button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="outline"
						circle
						disabled
						semanticColor={color}
					/>

					<styles.TypeTitle>Rounded button with text</styles.TypeTitle>
					<styles.CustomButton variant="outline" rounded semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with text disabled</styles.TypeTitle>
					<styles.CustomButton variant="outline" disabled rounded semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with icon</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="outline"
						semanticColor={color}
						rounded
					/>

					<styles.TypeTitle>Rounded button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="outline"
						rounded
						disabled
						semanticColor={color}
					/>
				</styles.ButtonStylesColumn>
				<styles.ButtonStylesColumn>
					<styles.VariantTitle>Empty Buttons</styles.VariantTitle>
					<styles.TypeTitle>Button with icon and text</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" variant="empty" semanticColor={color}>
						Este es un texto que tiene que ser muy largo
					</styles.CustomButton>
					<styles.CustomButton icon="FiCheck" variant="empty" semanticColor={color}>
						Continue
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon and text active</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" variant="empty" active semanticColor={color}>
						Este es otro boton
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" variant="empty" semanticColor={color} />

					<styles.TypeTitle>Button with text</styles.TypeTitle>
					<styles.CustomButton variant="empty" semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="empty"
						disabled
						semanticColor={color}
					/>

					<styles.TypeTitle>Button with text disabled</styles.TypeTitle>
					<styles.CustomButton variant="empty" disabled semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Circled button with icon</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="empty"
						circle
						semanticColor={color}
					/>

					<styles.TypeTitle>Circled button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="empty"
						circle
						disabled
						semanticColor={color}
					/>

					<styles.TypeTitle>Rounded button with text</styles.TypeTitle>
					<styles.CustomButton variant="empty" rounded semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with text disabled</styles.TypeTitle>
					<styles.CustomButton variant="empty" disabled rounded semanticColor={color}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with icon</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="empty"
						rounded
						semanticColor={color}
					/>

					<styles.TypeTitle>Rounded button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						variant="empty"
						rounded
						disabled
						semanticColor={color}
					/>
				</styles.ButtonStylesColumn>
			</styles.ButtonStylesRow>
		</styles.PageContainer>
	);
};

export default Home;
