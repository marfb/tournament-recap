import React, {useState} from 'react';
import styles from './styles';

const Buttons = () => {
	const [color, setColor] = useState('primary');
	const [variant, setVariant] = useState('filled');

	return (
		<styles.PageContainer>
			<styles.ButtonSelectorRow>
				<styles.ButtonSelectorColumn>
					<styles.ButtonSelectorTitle>Please choose a color</styles.ButtonSelectorTitle>
					<styles.ColorButton
						onClick={() => setColor('primary')}
						semanticColor="primary"
						active={color === 'primary'}
						focus>
						Primary
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setColor('secondary')}
						semanticColor="secondary"
						active={color === 'secondary'}
						focus>
						Secondary
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setColor('success')}
						semanticColor="success"
						active={color === 'success'}
						focus>
						Success
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setColor('info')}
						semanticColor="info"
						active={color === 'info'}
						focus>
						Info
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setColor('warning')}
						semanticColor="warning"
						active={color === 'warning'}
						focus>
						Warning
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setColor('help')}
						semanticColor="help"
						active={color === 'help'}
						focus>
						Help
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setColor('danger')}
						semanticColor="danger"
						active={color === 'danger'}
						focus>
						Danger
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setColor('primary')}
						variant="outline"
						disabled={color === 'primary'}>
						Reset
					</styles.ColorButton>
				</styles.ButtonSelectorColumn>
				<styles.ButtonSelectorColumn>
					<styles.ButtonSelectorTitle>Please choose a variant</styles.ButtonSelectorTitle>
					<styles.ColorButton
						onClick={() => setVariant('filled')}
						semanticColor="primary"
						focus
						active={variant === 'filled'}>
						Filled
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setVariant('outline')}
						semanticColor="primary"
						variant="outline"
						focus
						active={variant === 'outline'}>
						Outline
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setVariant('empty')}
						semanticColor="primary"
						variant="empty"
						focus
						active={variant === 'empty'}>
						Empty
					</styles.ColorButton>
					<styles.ColorButton
						onClick={() => setVariant('filled')}
						variant="outline"
						disabled={variant === 'filled'}>
						Reset
					</styles.ColorButton>
				</styles.ButtonSelectorColumn>
			</styles.ButtonSelectorRow>
			<styles.ButtonStylesRow>
				<styles.ButtonStylesColumn>
					<styles.VariantTitle>
						Buttons: {variant} {color}
					</styles.VariantTitle>
					<styles.TypeTitle>Button with icon and text</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" semanticColor={color} variant={variant}>
						Este es un texto que tiene que ser muy largo
					</styles.CustomButton>
					<styles.CustomButton icon="FiCheck" semanticColor={color} variant={variant}>
						Continue
					</styles.CustomButton>
					<styles.CustomButton icon="FiCheck" semanticColor={color} variant={variant} switchOrder>
						Continue
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon and text focus</styles.TypeTitle>
					<styles.CustomButton icon="FiCheck" focus semanticColor={color} variant={variant}>
						Este es otro boton
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon</styles.TypeTitle>
					<styles.IconButton type="icon" icon="FiCheck" semanticColor={color} variant={variant} />

					<styles.TypeTitle>Button with text</styles.TypeTitle>
					<styles.CustomButton semanticColor={color} variant={variant}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						semanticColor={color}
						type="icon"
						icon="FiCheck"
						variant={variant}
						disabled
					/>

					<styles.TypeTitle>Button with text disabled</styles.TypeTitle>
					<styles.CustomButton disabled semanticColor={color} variant={variant}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Circled button with icon</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						semanticColor={color}
						variant={variant}
						circle
					/>

					<styles.TypeTitle>Circled button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						semanticColor={color}
						circle
						disabled
						variant={variant}
					/>

					<styles.TypeTitle>Rounded button with text</styles.TypeTitle>
					<styles.CustomButton rounded semanticColor={color} variant={variant}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with text disabled</styles.TypeTitle>
					<styles.CustomButton disabled rounded semanticColor={color} variant={variant}>
						Subscribe!
					</styles.CustomButton>

					<styles.TypeTitle>Rounded button with icon</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						rounded
						semanticColor={color}
						variant={variant}
					/>

					<styles.TypeTitle>Rounded button with icon disabled</styles.TypeTitle>
					<styles.IconButton
						type="icon"
						icon="FiCheck"
						semanticColor={color}
						rounded
						disabled
						variant={variant}
					/>
				</styles.ButtonStylesColumn>
			</styles.ButtonStylesRow>
		</styles.PageContainer>
	);
};

export default Buttons;
