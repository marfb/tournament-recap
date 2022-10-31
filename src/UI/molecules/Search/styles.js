import styled from 'styled-components';
import Button from 'UI/atoms/Button';
import Input from 'UI/atoms/Input';

const SearchContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const SearchInput = styled(Input)``;

const SearchButton = styled(Button)`
	height: 44px;
	margin-left: 10px;
`;

export default {SearchContainer, SearchInput, SearchButton};
