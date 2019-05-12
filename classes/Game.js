import { UI } from "./UI.js";
import { Monster } from "./Monster.js"

let ui = new UI();
let monster = new Monster();

export class Game {
  calculateMonsterLevel(target) {
    if (target.classList.contains("levelOne")) {
      if (target.classList.contains("areaZero")) {
        return { zone: 1, area: 0 };
      } else if (target.classList.contains("areaOne")) {
        return { zone: 1, area: 1 };
      } else if (target.classList.contains("areaTwo")) {
        return { zone: 1, area: 2 };
      }
    }

    if (target.classList.contains("levelTwo")) {
      if (target.classList.contains("areaZero")) {
        return { zone: 2, area: 0 };
      } else if (target.classList.contains("areaOne")) {
        return { zone: 2, area: 1 };
      } else if (target.classList.contains("areaTwo")) {
        return { zone: 2, area: 2 };
      }
    }

    if (target.classList.contains("levelThree")) {
      if (target.classList.contains("areaZero")) {
        return { zone: 3, area: 0 };
      } else if (target.classList.contains("areaOne")) {
        return { zone: 3, area: 1 };
      } else if (target.classList.contains("areaTwo")) {
        return { zone: 3, area: 2 };
      }
    }
  }

  generateEnemyCount() {
    let min = 1;
    let max = 3;
    let enemyCount = Math.floor(Math.random() * (max - min + 1)) + min;
    return enemyCount;
  }

  heroAttacks(hero, monsters, monsterID) {
    ui.updateBattleText(" ");
    monsters.forEach(monster => {

      if (monsterID === monster.uuid) {
        let heroDamage = hero.attack();
        let monsterLife = monster.takeDamage(heroDamage);
        if (monsterLife > 0) {
          ui.updateBattleText(
            `The hero hit ${monster.name} for ${heroDamage} point(s) of damage`
          );
        } else {
          ui.updateBattleText(
            `The hero hit ${
              monster.name
            } for ${heroDamage} point(s) of damage, and it has died`
          );
          ui.removerMonsterFromAttackMenu(monsterID);
        }
      }

      if(!monster.getKOed()){
        let monsterAttack = monster.attack();
        hero.takeDamage(monsterAttack);
        ui.updateHeroLifeData(hero.health);
        ui.updateBattleText(
          `The hero took ${monsterAttack} points of damage from ${monster.name}`
        );
      }
    });
  }

  heroSpecialAttacks(hero, monsters, monsterID) {
    ui.updateBattleText(" ");
    monsters.forEach(monster => {
      if (monsterID === monster.uuid) {
        let heroDamage = hero.specialAttack();
        let monsterLife = monster.takeDamage(heroDamage);
        if (monsterLife > 0) {
          ui.updateBattleText(
            `The hero hit ${monster.name} for ${heroDamage} point(s) of damage`
          );
        } else {
          ui.updateBattleText(
            `The hero hit ${
              monster.name
            } for ${heroDamage} point(s) of damage, and it has died`
          );
          ui.removerMonsterFromAttackMenu(monsterID);
        }
      }
      let monsterAttack = monster.attack();
      hero.takeDamage(monsterAttack);
      ui.updateHeroLifeData(hero.health);
      ui.updateBattleText(
        `The hero took ${monsterAttack} points of damage from ${monster.name}`
      );
    });
  }

  heroHeals(hero, monsters) {
    ui.updateBattleText(" ");

    let amountToHeal = hero.heal();
    let currenHealth = hero.takeHeal(amountToHeal);

    if(currenHealth > 100){
      hero.healToFull()
      currenHealth = 100;
    }
    monsters.forEach(monster => {
      if(monster.health > 0){
        let monsterAttack = monster.attack()
        let heroRemainingLife = hero.takeDamage(monsterAttack)
        ui.updateBattleText(`The hero took ${monsterAttack} points of damage from ${monster.name}`)
      }
    });
    ui.updateBattleText(`The hero healed for ${amountToHeal}`);
    ui.updateHeroLifeData(currenHealth);
  }
  


  
}
