import { checkNearestShip } from '../utils/helpers/checkNearestShip';
import { Cell } from './Cell.model';
import { ShipListener } from './ShipListener';

export class ShipManager {
	alive: number;

	constructor() {
		this.alive = 0;
	}

	createShip(shipListener: ShipListener, cells: Cell[][], x: number, y: number) {
		let create = false;
		let ship = shipListener.current;

		if (
			ship.breakpoints.includes(ship.done) &&
			ship.done < ship.length * ship.items
		) {
			ship.start = { x: -1, y: -1 };
			ship.end = { x: -1, y: -1 };
		}

		if (ship.done === ship.length * ship.items) {
			const prevShip = shipListener.current;
			ship = shipListener.next();

			if (prevShip === ship) {
				return false;
			}
		}

		if (ship.start.x === -1) {
			if (checkNearestShip(cells, x, y, true)) {
				return;
			} else {
				ship.start.x = x;
				ship.start.y = y;
				create = true;
			}
		}

		if (ship.end.x === -1 && checkNearestShip(cells, x, y) < 2) {
			if (
				(ship.start.y === y &&
					(ship.start.x + 1 === x || ship.start.x - 1 === x)) ||
				(ship.start.x === x && (ship.start.y + 1 === y || ship.start.y - 1 === y))
			) {
				ship.end.x = x;
				ship.end.y = y;
				create = true;
			}
		}

		if (
			checkNearestShip(cells, x, y) < 2 &&
			ship.start.x !== -1 &&
			ship.end.x !== -1
		) {
			const flow =
				ship.start.x === ship.end.x
					? { main: ship.start.x, isX: true }
					: { main: ship.start.y, isX: false };

			if (flow.isX && flow.main === x) {
				if (y - 1 === ship.end.y && y !== ship.start.y) {
					ship.end.y = y;
					create = true;
				} else if (y - 1 === ship.start.y && y !== ship.end.y) {
					ship.start.y = y;
					create = true;
				} else if (y + 1 === ship.start.y && y !== ship.end.y) {
					ship.start.y = y;
					create = true;
				} else if (y + 1 === ship.end.y && y !== ship.start.y) {
					ship.end.y = y;
					create = true;
				}
			}

			if (!flow.isX && flow.main === y) {
				if (x - 1 === ship.end.x && x !== ship.start.x) {
					ship.end.x = x;
					create = true;
				} else if (x - 1 === ship.start.x && x !== ship.end.x) {
					ship.start.x = x;
					create = true;
				} else if (x + 1 === ship.start.x && x !== ship.end.x) {
					ship.start.x = x;
					create = true;
				} else if (x + 1 === ship.end.x && x !== ship.start.x) {
					ship.end.x = x;
					create = true;
				}
			}
		}

		if (create) {
			this.alive++;
			ship.add(x, y);

			return true;
		}

		return false;
	}

	removeCell() {
		this.alive--;
	}
}
