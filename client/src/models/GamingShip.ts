export interface Chart {
	x: number;
	y: number;
}

export class GamingShip {
	items: number;
	length: number;
	start: Chart;
	end: Chart;
	created: Chart[][];
	breakpoints: number[];

	constructor(items: number, length: number) {
		this.items = items;
		this.length = length;
		this.start = { x: -1, y: -1 };
		this.end = { x: -1, y: -1 };
		this.created = [[]];
		this.breakpoints = Array(items)
			.fill(length)
			.map((el, i) => el * (i + 1));
	}

	public add(x: number, y: number) {
		if (this.created?.length < this.items * this.length) {
			const last = this.created?.[this.created.length - 1];

			if (last.length < this.length) {
				last.push({ x, y });
			} else {
				this.created.push([{ x, y }]);
			}
		}
	}

	public shipFinished() {
		return this.done === 0 || this.breakpoints.includes(this.done);
	}

	public get done() {
		return this.created.reduce((acc, el) => (acc += el.length), 0);
	}

	public removeLast = () => {
		if (this.created[0].length === 0) return [];

		this.start = { x: -1, y: -1 };
		this.end = { x: -1, y: -1 };
		const lastShip = this?.created.pop();

		if (this.created.length === 0) {
			this.created = [[]];
		}

		return lastShip || [];
	};
}
