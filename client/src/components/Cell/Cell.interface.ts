import { Cell } from '../../models/Cell.model';

export interface CellProps {
	cell: Cell;
	addMard: (x: number, y: number) => void;
}
