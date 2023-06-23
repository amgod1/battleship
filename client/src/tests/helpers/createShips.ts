import { fireEvent, screen } from '@testing-library/react';
import {
	shipConfig,
	shipsLength1,
	shipsLength2,
	shipsLength3,
	shipsLength4,
	invalidShipsLength1,
	invalidShipsLength2,
	invalidShipsLength3,
	invalidShipsLength4,
} from './ships.config';

const clickCells = (...cellElements: HTMLElement[]) => {
	cellElements.forEach(cellElement => {
		fireEvent.click(cellElement);
	});
};

const createShip = (shipConfig: shipConfig) => {
	shipConfig.forEach(ship => {
		const cellElements = ship.map(({ x, y }) => screen.getByTestId(`${x}-${y}`));
		clickCells(...cellElements);
	});
};

export const createShipsLength4 = () => createShip(shipsLength4);
export const createShipsLength3 = () => createShip(shipsLength3);
export const createShipsLength2 = () => createShip(shipsLength2);
export const createShipsLength1 = () => createShip(shipsLength1);

export const createInvalidShipsLength4 = () => createShip(invalidShipsLength4);
export const createInvalidShipsLength3 = () => createShip(invalidShipsLength3);
export const createInvalidShipsLength2 = () => createShip(invalidShipsLength2);
export const createInvalidShipsLength1 = () => createShip(invalidShipsLength1);
