const attacker = {
	archer: 30,
	footSoldier: 55,
	cavalry: 10,
	artillery: 3,
	checkChancesToWin(defenderObject) {
		let count = 0
		function comparing(att, def) {
			if (att > def) {
				count += 1
			}
		}
		comparing(this.archer, defenderObject.archer)
		comparing(this.footSoldier, defenderObject.footSoldier)
		comparing(this.cavalry, defenderObject.cavalry)
		comparing(this.artillery, defenderObject.artillery)
		return [count, Object.keys(defenderObject).length]
	},
	improveArmy() {
		this.archer += 5
		this.footSoldier += 5
		this.cavalry += 5
		this.artillery += 5
	},
	attack(defender) {
		const ourArmyChances = this.checkChancesToWin(defender)[0]
		const maximumChances = this.checkChancesToWin(defender)[1]
		let proc = ourArmyChances / maximumChances
		if (proc < 0.7) {
			this.improveArmy()
			alert(`Our chances are equal ${ourArmyChances}/${maximumChances}. Must be strengthened!`)
		} else {
			alert('We intensified! We will undoubtedly win! Our chances are high!')
		}
	},
}

const defender = {
	archer: 33,
	footSoldier: 50,
	cavalry: 40,
	artillery: 10,
}

attacker.attack(defender); // Our chances are equal 1/4. Must be strengthened!
attacker.attack(defender); // Our chances are equal 2/4. Must be strengthened!
attacker.attack(defender); // We intensified! We will undoubtedly win! Our chances are high!

