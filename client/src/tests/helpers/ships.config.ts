export const shipsLength4 = [
	[
		{ x: 1, y: 1 },
		{ x: 1, y: 2 },
		{ x: 1, y: 3 },
		{ x: 1, y: 4 },
	],
];

export const invalidShipsLength4 = [
	[
		{ x: 1, y: 1 },
		{ x: 1, y: 2 },
		{ x: 1, y: 3 },
		{ x: 9, y: 9 },
		{ x: 1, y: 4 },
	],
];

export const shipsLength3 = [
	[
		{ x: 3, y: 1 },
		{ x: 3, y: 2 },
		{ x: 3, y: 3 },
	],
	[
		{ x: 3, y: 5 },
		{ x: 3, y: 6 },
		{ x: 3, y: 7 },
	],
];

export const invalidShipsLength3 = [
	[
		{ x: 3, y: 1 },
		{ x: 3, y: 2 },
		{ x: 9, y: 9 },
		{ x: 3, y: 3 },
	],
	[
		{ x: 3, y: 5 },
		{ x: 3, y: 6 },
		{ x: 9, y: 9 },
		{ x: 3, y: 7 },
	],
];

export const shipsLength2 = [
	[
		{ x: 5, y: 1 },
		{ x: 5, y: 2 },
	],
	[
		{ x: 5, y: 4 },
		{ x: 5, y: 5 },
	],
	[
		{ x: 5, y: 7 },
		{ x: 5, y: 8 },
	],
];

export const invalidShipsLength2 = [
	[
		{ x: 5, y: 1 },
		{ x: 9, y: 9 },
		{ x: 5, y: 2 },
	],
	[
		{ x: 5, y: 4 },
		{ x: 9, y: 9 },
		{ x: 5, y: 5 },
	],
	[
		{ x: 5, y: 7 },
		{ x: 9, y: 9 },
		{ x: 5, y: 8 },
	],
];

export const shipsLength1 = [
	[{ x: 7, y: 1 }],
	[{ x: 7, y: 3 }],
	[{ x: 7, y: 5 }],
	[{ x: 7, y: 7 }],
];

export const invalidShipsLength1 = [
	[{ x: 7, y: 1 }],
	[{ x: 7, y: 2 }],
	[{ x: 7, y: 3 }],
	[{ x: 7, y: 5 }],
	[{ x: 7, y: 7 }],
];

export type shipConfig = {
	x: number;
	y: number;
}[][];
