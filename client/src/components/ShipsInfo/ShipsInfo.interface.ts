import { Board } from "../../models/Board.model";
import { ShipListener } from "../../models/ShipListener";

export interface ShipsInfoProps {
	board: Board;
	setBoard: React.Dispatch<React.SetStateAction<Board>>;
	shipListener: ShipListener;
}
