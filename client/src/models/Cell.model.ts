import { Board } from './Board.model';
import { Mark } from './marks/Mark.model';

export class Cell {
	board: Board;
	x: number;
	y: number;
	mark: Mark | null;
	id: number;

	constructor(board: Board, x: number, y: number, mark: Mark | null) {
		this.board = board;
		this.x = x;
		this.y = y;
		this.mark = mark;
		this.id = Math.random();
	}
}
