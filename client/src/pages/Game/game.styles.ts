import styled from 'styled-components';

export const GameWrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 15px;
`;

export const BoardsWrapper = styled.div`
	display: flex;
	gap: 90px;
`;

export const CopyButton = styled.button`
	padding: 10px 15px;
	border: solid 1px white;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;

	&:active {
		background-color: gray;
	}
`;

export const Nickname = styled.p`
	margin: 15px;
`;

export const PlayerInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
