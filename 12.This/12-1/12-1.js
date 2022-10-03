let student = {
	stack: ["HTML"],
	level: 1,
	improveLevel: function () {
		this.level += 1
		if (this.level === 2) {
			this.stack.push("CSS")
		} else if (this.level === 3) {
			this.stack.push("JavaScript")
		} else if (this.level === 4) {
			this.stack.push("React")
		} else if (this.level === 5) {
			this.stack.push("NodeJS")
		} else {
			alert("The student has learned all the technologies!")
		}
		return {
			stack: this.stack,
			level: this.level,
			improveLevel: this.improveLevel
		}
	}
}

let result = student
	.improveLevel()
	.improveLevel()
	.improveLevel()
	.improveLevel()
	.improveLevel()

console.log(result)