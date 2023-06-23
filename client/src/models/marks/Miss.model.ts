import { Cell } from '../Cell.model';
import { Mark } from './Mark.model';

export class Miss extends Mark {
	constructor(cell: Cell) {
		super(cell);
		this.logo = null;
		this.name = 'miss';
		this.color = 'blue';
	}
}