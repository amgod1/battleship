import { Board } from './../../models/Board.model';

export interface BoardProps {
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
	shipsReady: boolean;
	isMyBoard: boolean;
	canShoot: boolean;
	shoot?: (x: number, y: number) => void;
}
