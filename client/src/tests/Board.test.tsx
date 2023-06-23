import { render } from '@testing-library/react';
import BoardComponent from '../components/Board/BoardComponent';
import { Board } from '../models/Board.model';
import {
	createShipsLength1,
	createShipsLength2,
	createShipsLength3,
	createShipsLength4,
	createInvalidShipsLength1,
	createInvalidShipsLength2,
	createInvalidShipsLength3,
	createInvalidShipsLength4,
} from './helpers/createShips';
import {
	shipsLength1,
	shipsLength2,
	shipsLength3,
	shipsLength4,
} from './helpers/ships.config';

describe('Board component', () => {
	let board = new Board();
	let setBoard = jest.fn();

	beforeEach(() => {
		board = new Board();
		setBoard = jest.fn();

		render(
			<BoardComponent
				board={board}
				setBoard={setBoard}
				shipsReady={false}
				isMyBoard={true}
				canShoot={false}
			/>
		);
	});

	it('Arranging ship of length 4 according to rules', () => {
		createShipsLength4();
		expect(board.shipManager.alive).toEqual(4);
	});

	it('Arranging ship of length 4 with invalid cell', () => {
		createInvalidShipsLength4();
		expect(board.shipManager.alive).toEqual(4);
	});

	it('Arranging ship of length 4 followed by the removal of last ship ', () => {
		createShipsLength4();
		board.removeShip(shipsLength4[shipsLength4.length - 1]);

		expect(board.shipManager.alive).toEqual(0);
	});

	it('Arranging ships of length 4 and 3 according to rules', () => {
		createShipsLength4();
		createShipsLength3();

		expect(board.shipManager.alive).toEqual(10);
	});

	it('Arranging ships of length 4 and 3 with invalid cells', () => {
		createInvalidShipsLength4();
		createInvalidShipsLength3();

		expect(board.shipManager.alive).toEqual(10);
	});

	it('Arranging ships of length 4 and 3, followed by the removal of last ship', () => {
		createShipsLength4();
		createShipsLength3();

		board.removeShip(shipsLength3[shipsLength3.length - 1]);

		expect(board.shipManager.alive).toEqual(7);
	});

	it('Arranging ships of length 4, 3 and 2 according to rules', () => {
		createShipsLength4();
		createShipsLength3();
		createShipsLength2();

		expect(board.shipManager.alive).toEqual(16);
	});

	it('Arranging ships of length 4, 3 and 2 with invalid cells', () => {
		createInvalidShipsLength4();
		createInvalidShipsLength3();
		createInvalidShipsLength2();

		expect(board.shipManager.alive).toEqual(16);
	});

	it('Arranging ships of length 4, 3 and 2, followed by the removal of last ship', () => {
		createShipsLength4();
		createShipsLength3();
		createShipsLength2();

		board.removeShip(shipsLength2[shipsLength2.length - 1]);

		expect(board.shipManager.alive).toEqual(14);
	});

	it('Arranging all ships according to rules', () => {
		createShipsLength4();
		createShipsLength3();
		createShipsLength2();
		createShipsLength1();

		expect(board.shipManager.alive).toEqual(20);
	});

	it('Arranging all ships with invalid cells', () => {
		createInvalidShipsLength4();
		createInvalidShipsLength3();
		createInvalidShipsLength2();
		createInvalidShipsLength1();

		expect(board.shipManager.alive).toEqual(20);
	});

	it('Arranging all ships, followed by the removal of last ship', () => {
		createShipsLength4();
		createShipsLength3();
		createShipsLength2();
		createShipsLength1();

		board.removeShip(shipsLength1[shipsLength1.length - 1]);

		expect(board.shipManager.alive).toEqual(19);
	});
});
