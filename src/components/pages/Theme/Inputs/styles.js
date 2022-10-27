import styled from 'styled-components';
import Input from 'UI/atoms/Input';
import Text from 'UI/atoms/Text';
import Main from 'components/templates/Main';
import palette from 'theme/palette';

const PageContainer = styled(Main)`
	padding: 20px;
	background-color: ${palette.grayscale[900]};
`;

const CustomInput = styled(Input)`
	margin: 0 30px;
	width: 160px;
`;

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

const InputsStylesRow = styled.div`
	display: flex;
	justify-content: center;
`;

const InputsStylesColumn = styled.div`
	display: flex;
	margin: 30px;
`;

export default {
	PageContainer,
	TypeTitle,
	VariantTitle,
	CustomInput,
	InputsStylesRow,
	InputsStylesColumn,
};
