class Person {
	constructor(name, surname, age) {
		this._name = name;
 		this._surname = surname;
 		this._age = age;
	}

	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

	get surname() {
		return this._surname;
	}

	set surname(surname) {
		this._surname = surname;
	}

	get age() {
		return this._age;
	}

	set age(age) {
		this._age = age;
	}

}