import styled from 'styled-components';

export const Table = styled.table`
	border-collapse: collapse;
	border-style: hidden;
	margin: 10px;
`;

export const TD = styled.td<{ $current?: boolean }>`
	border: 2px solid white;
	text-align: center;
	padding: 5px 10px;
	background-color: ${props => (props.$current ? '#808080' : 'inherit')};
`;

export const Button = styled.button`
	padding: 10px 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid white;
	border-radius: 10px;
	text-transform: uppercase;

	&:hover {
		cursor: pointer;
	}

	&:active {
		background-color: #808080;
	}
`;
