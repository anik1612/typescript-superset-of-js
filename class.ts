class Player {
	public name: string; // access modifier
	private age: number; // access modifier
	readonly country: string; // access modifier

	constructor(name: string, age: number, country: string) {
		this.name = name;
		this.age = age;
		this.country = country;
	}

	play() {
		console.log(`${this.name} from ${this.country} is playing`);
	}
}

const mashrafee = new Player('Mashrafee', 39, 'Bangladesh');
const sakib = new Player('Sakib', 33, 'Bangladesh');

const players: Player[] = [];

players.push(mashrafee);
