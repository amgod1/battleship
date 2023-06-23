import styled from 'styled-components';

export const LoginForm = styled.form`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 15px;
`;

export const InputWrapper = styled.div`
	padding: 0 15px;
	width: 100%;
	max-width: 400px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
`;

export const RadioContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const RadioButton = styled.input`
	margin: 5px;
`;

export const SubmitButton = styled.button`
	background-color: #4caf50;
	color: #fff;
	padding: 10px 15px;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #45a049;
	}
`;
