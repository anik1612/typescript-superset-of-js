export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`name: ${this.name}, age: ${this.age} & country: ${this.country}`);
    }
}
