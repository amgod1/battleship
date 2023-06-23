import { Cell } from '../../models/Cell.model';
import { Ship } from '../../models/marks/Ship.model';

export const checkNearestShip = (
	cells: Cell[][],
	x: number,
	y: number,
	middle = false
) => {
	let counter = 0;

	if (cells?.[y + 1]?.[x]?.mark instanceof Ship) {
		counter++;
	}
	if (cells?.[y - 1]?.[x]?.mark instanceof Ship) {
		counter++;
	}
	if (cells?.[y + 1]?.[x + 1]?.mark instanceof Ship) {
		counter++;
	}
	if (cells?.[y + 1]?.[x - 1]?.mark instanceof Ship) {
		counter++;
	}
	if (cells?.[y]?.[x + 1]?.mark instanceof Ship) {
		counter++;
	}
	if (cells?.[y]?.[x - 1]?.mark instanceof Ship) {
		counter++;
	}
	if (cells?.[y - 1]?.[x + 1]?.mark instanceof Ship) {
		counter++;
	}
	if (cells?.[y - 1]?.[x - 1]?.mark instanceof Ship) {
		counter++;
	}
	if (middle && cells?.[y]?.[x]?.mark instanceof Ship) {
		counter++;
	}

	return counter;
};
