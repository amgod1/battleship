import { Cell } from '../Cell.model';
import { Mark } from './Mark.model';

export class Ship extends Mark {
	constructor(cell: Cell) {
		super(cell);
		this.logo = null;
		this.name = 'ship';
		this.color = 'grey';
	}
}
