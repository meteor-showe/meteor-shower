class Meteor {
	constructor() {
		this.list = {}
	}
	set(key, value) {
		this.list[key] = value
	}
	get(key) {
		return this.list[key]
	}
}

window.Meteor = Meteor