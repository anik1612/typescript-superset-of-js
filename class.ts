class Player {
	constructor(
		public name: string,
		private age: number,
		readonly country: string
	) {}

	play() {
		console.log(
			`name: ${this.name}, age: ${this.age} & country: ${this.country}`
		);
	}
}

const mashrafee = new Player('Mashrafee', 39, 'Bangladesh');
const sakib = new Player('Sakib', 33, 'Bangladesh');

const players: Player[] = [];

players.push(mashrafee);
