import styled from 'styled-components';
import Button from 'UI/atoms/Button';
import Text from 'UI/atoms/Text';
import Main from 'components/templates/Main';
import palette from 'theme/palette';

const PageContainer = styled(Main)`
	padding: 20px;
	background-color: ${palette.grayscale[800]};
`;

const CustomButton = styled(Button)``;

const IconButton = styled(Button)``;

const TypeTitle = styled(Text)`
	color: ${palette.base.white};
	font-weight: bold;
	margin: 15px 0 5px;
`;

const VariantTitle = styled(Text)`
	color: ${palette.base.white};
	margin: 15px 0 5px;
	font-size: 20px;
`;

const ButtonStylesRow = styled.div`
	display: flex;
	justify-content: center;
`;

const ButtonStylesColumn = styled.div`
	margin: 30px;
`;

const ButtonSelectorRow = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	width: 50%;
	margin: 0 auto;
`;

const ButtonSelectorColumn = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
	position: relative;
`;

const ButtonSelectorTitle = styled(Text)`
	color: ${palette.base.white};
	font-size: 12px;
	width: 250px;
	position: absolute;
	left: 10px;
	top: -23px;
`;

const ColorButton = styled(Button)`
	width: 90px;
	margin: 0 10px;
`;

export default {
	PageContainer,
	TypeTitle,
	VariantTitle,
	CustomButton,
	IconButton,
	ButtonStylesRow,
	ButtonStylesColumn,
	ColorButton,
	ButtonSelectorRow,
	ButtonSelectorColumn,
	ButtonSelectorTitle,
};
