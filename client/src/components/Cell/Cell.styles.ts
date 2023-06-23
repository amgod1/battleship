import styled from 'styled-components';

export const CellWrapper = styled.div<{ $color?: string }>`
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid white;
	line-height: 100%;
	background-color: ${props => props.$color || 'inherit'};

	&:hover {
		cursor: pointer;
		background-color: gray;
	}
`;
