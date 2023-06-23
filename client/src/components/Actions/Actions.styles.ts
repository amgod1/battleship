import styled from 'styled-components';

export const ReadyButton = styled.button`
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

export const ActionsInfo = styled.div<{ $canShoot?: boolean }>`
	margin: 10px;
	padding: 10px 15px;
	border: solid 1px white;
	border-radius: 4px;
	font-size: 1.5rem;
	background-color: ${props => (props.$canShoot ? '#4caf50' : '#ff0000')};
`;
