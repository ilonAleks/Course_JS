const hero = {
	name: 'Batman',
	health: 100,
	heatEnemy: function (enemy) {
		return enemy.health -= 10
	}
}

const enemy = {
	name: 'Joker',
	health: 100,
	heatHero: function (hero) {
		return hero.health -= 10
	}
}
startGame(hero, enemy)


function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
	while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
		let randomNumberInRange = getRandomNumberInRange(0, 2)
		if (randomNumberInRange === 0) {
			heroPlayer.heatEnemy(heroPlayer)
		} else {
			enemyPlayer.heatHero(enemyPlayer)
		}
	}
	if (heroPlayer.health > 0) {
		alert(`${heroPlayer.name} won! He has left ${heroPlayer.health} health`)
	} else {
		alert(`${enemyPlayer.name} won! He has left ${enemyPlayer.health} health`)
	}
}