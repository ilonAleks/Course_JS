const footballer = {
	fullName: 'Cristiano Ronaldo',
	attack: function () {
		console.log(`${this.fullName} now with the ball and starts the attack!`)
	},
	scoreGoal(sound) {
		console.log(`${this.fullName} scored goal! Blimey!`)
		this.celebrate(sound)
	},
	celebrate(sound) {
		console.log(sound)
	},
	goToSubstitution: function (newPlayer) {
		console.log(`${this.fullName} leaves to replace. ${newPlayer} leaves the field`)
	}
}

const attack = footballer.attack
const bindAttack = attack.bind(footballer)()

const score = footballer.scoreGoal
const callScore = score.call(footballer, 'Viva!')

const substitute = footballer.goToSubstitution
const applySubstitute = substitute.apply(footballer, ['Paulo Dibala'])


// Cristiano Ronaldo now with the ball and starts the attack!
// Cristiano Ronaldo scored goal! Blimey!
// Viva!
// Cristiano Ronaldo leaves to replace. Paulo Dibala leaves the field

