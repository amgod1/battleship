import React, { FC } from 'react';
import { BoardProps } from './Board.interface';
import CellComponent from '../Cell/CellComponent';
import { BoardWrapper } from './Board.styles';
import { warningToast } from '../../utils/helpers/warningToast';

const BoardComponent: FC<BoardProps> = ({
	board,
	setBoard,
	shipsReady,
	isMyBoard,
	canShoot,
	shoot,
}) => {
	const updateBoard = () => {
		const newBoard = board.getCopyBoard();

		if (newBoard.shouldUpdate) {
			setBoard(newBoard);
		} else if (!canShoot && isMyBoard) {
			warningToast(
				'Ships must be placed one cell apart.\nCheck you have chosen a suitable ship location.'
			);
		}
	};

	const addMard = (x: number, y: number) => {
		if (!shipsReady && isMyBoard) {
			board.addShip(x, y);
		}

		if (canShoot && !isMyBoard && shoot) {
			shoot(x, y);
		}

		updateBoard();
	};

	return (
		<BoardWrapper>
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map(cell => (
						<CellComponent key={cell.id} cell={cell} addMard={addMard} />
					))}
				</React.Fragment>
			))}
		</BoardWrapper>
	);
};

export default BoardComponent;
