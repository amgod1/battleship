import { ShipListener } from './ShipListener';
import { ShipManager } from './ShipManager.model';
import { Cell } from './Cell.model';
import { Damage } from './marks/Damage.model';
import { Miss } from './marks/Miss.model';
import { Ship } from './marks/Ship.model';
import { Chart } from './GamingShip';
import { Mark } from './marks/Mark.model';

export class Board {
	public cells: Cell[][] = [];
	public shouldUpdate: boolean;
	public shipListener: ShipListener;
	public shipManager: ShipManager;

	constructor() {
		this.initCells();
		this.shouldUpdate = false;
		this.shipListener = new ShipListener();
		this.shipManager = new ShipManager();
	}

	private initCells() {
		for (let y = 0; y < 10; y++) {
			const row: Cell[] = [];

			for (let x = 0; x < 10; x++) {
				row.push(new Cell(this, x, y, null));
			}

			this.cells.push(row);
		}
	}

	private getCell(x: number, y: number) {
		return this.cells[y][x];
	}

	public getCopyBoard() {
		const newBoard = new Board();
		newBoard.cells = this.cells;
		newBoard.shouldUpdate = this.shouldUpdate;
		newBoard.shipListener = this.shipListener;
		newBoard.shipManager = this.shipManager;

		return newBoard;
	}

	public addShip(x: number, y: number) {
		const checkForUpdate =
			this.shipManager.createShip(this.shipListener, this.cells, x, y) || false;

		if (checkForUpdate) {
			new Ship(this.getCell(x, y));
		}

		this.shouldUpdate = checkForUpdate;
	}

	public removeShip(ship: Chart[]) {
		for (const el of ship) {
			this.shipManager.removeCell();
			new Mark(this.getCell(el.x, el.y));
		}
	}

	public addMiss(x: number, y: number) {
		new Miss(this.getCell(x, y));
	}

	public addDamage(x: number, y: number) {
		new Damage(this.getCell(x, y));
	}
}
