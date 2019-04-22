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

  generateEnemyCount(){
    let min = 1;
    let max = 3;
    let enemyCount = Math.floor(Math.random() * (max - min + 1)) + min;
    return enemyCount;
  }

  beginBattle(hero, monsters){
      
  }
}
