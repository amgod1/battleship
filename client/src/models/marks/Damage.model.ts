import { Cell } from '../Cell.model';
import { Mark } from './Mark.model';

export class Damage extends Mark {
	constructor(cell: Cell) {
		super(cell);
		this.logo = 'X';
		this.name = 'damage';
		this.color = 'red';
	}
}
