import { GamingShip } from './GamingShip';

export class ShipListener {
	private ships: GamingShip[];
	public current: GamingShip;

	constructor() {
		this.ships = [
			new GamingShip(1, 4),
			new GamingShip(2, 3),
			new GamingShip(3, 2),
			new GamingShip(4, 1),
		];
		this.current = this.ships[0];
	}

	private selectShip = (ship: GamingShip) => {
		const shouldUpdate = this.current.shipFinished();

		if (shouldUpdate) {
			this.current = ship;
		}

		return shouldUpdate;
	};

	public next() {
		for (const ship of this.ships) {
			if (ship.done < ship.length * ship.items) {
				this.current = ship;
				return this.current;
			}
		}

		return this.current;
	}

	public allShips() {
		return this.ships.map(ship => ({
			ship,
			update: () => this.selectShip(ship),
		}));
	}

	public isAllShipsReady() {
		for (let i = 0; i < this.ships.length; i++) {
			const ship = this.ships[i];

			if (ship.done !== ship.length * ship.items) {
				return false;
			}
		}

		return true;
	}
}
