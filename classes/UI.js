export class UI {
  initUI() {
    let zoneOne = document.getElementById("zoneOne");
    let zoneTwo = document.getElementById("zoneTwo");
    let zoneThree = document.getElementById("zoneThree");
    let navigation = document.getElementById("navigation");
    let lifeBar = document.getElementById("namePlate");
    let fightScene = document.getElementById("fightScene");
    let youLost = document.getElementById("youLost");

    fightScene.classList.add("none");
    zoneOne.classList.add("none");
    zoneTwo.classList.add("none");
    zoneThree.classList.add("none");
    navigation.classList.add("none");
    lifeBar.classList.add("none");
  }

  showYouLose() {
    youLost.classList.remove("none");
  }

  showNavigation() {
    navigation.classList.remove("none");
    navigation.classList.add("block");
  }

  hideNavigation() {
    navigation.classList.remove("block");
    navigation.classList.add("none");
  }

  showNamePlate() {
    namePlate.classList.remove("none");
    namePlate.classList.add("block");
  }

  hideNamePlate() {
    namePlate.classList.remove("block");
    namePlate.classList.add("none");
  }

  showZoneHome() {
    zoneHome.classList.remove("none");
    zoneHome.classList.add("block");
  }

  hideZoneHome() {
    zoneHome.classList.remove("block");
    zoneHome.classList.add("none");
  }

  showZoneOne() {
    zoneOne.classList.remove("none");
    zoneOne.classList.add("block");
  }

  hideZoneOne() {
    zoneOne.classList.remove("block");
    zoneOne.classList.add("none");
  }

  showZoneTwo() {
    zoneTwo.classList.remove("none");
    zoneTwo.classList.add("block");
  }

  hideZoneTwo() {
    zoneTwo.classList.remove("block");
    zoneTwo.classList.add("none");
  }

  showZoneThree() {
    zoneThree.classList.remove("none");
    zoneThree.classList.add("block");
  }

  hideZoneThree() {
    zoneThree.classList.remove("block");
    zoneThree.classList.add("none");
  }

  showFightScene() {
    fightScene.classList.remove("none");
    fightScene.classList.add("block");
  }

  hideFightScene() {
    fightScene.classList.remove("block");
    fightScene.classList.add("none");
  }

  placeHero(wizardSprite) {
    let placementBox = document.getElementById("heroPlacementBox");
    placementBox.innerHTML = "";
    placementBox.appendChild(wizardSprite);
  }

  placeMonsters(monsterSprites) {
    let placementBox = document.getElementById("monsterPlacementBox");
    placementBox.innerHTML = "";
    monsterSprites.forEach(monsterSprite => {
      placementBox.appendChild(monsterSprite);
    });
  }

  showAttackWindow(monsters, elementToAppend) {
    let attackTargets = document.getElementById("attackTargets");
    attackTargets.innerHTML = "";

    let toAppend = document.getElementById(elementToAppend);
    toAppend.innerHTML = "";

    let ul = document.createElement("ul");
    let attack = document.createElement("li");
    attack.innerText = "Attack";
    ul.append(attack);

    attack.addEventListener("click", () => {
      let ul = document.createElement("ul");
      monsters.forEach(monster => {
        let li = document.createElement("li");
        li.setAttribute("id", monster.uuid);
        li.classList.add("attackClick");
        li.innerText = monster.name;
        ul.append(li);
      });

      let attackTargets = document.getElementById("attackTargets");
      attackTargets.innerHTML = "";
      attackTargets.append(ul);
    });

    let specialAttack = document.createElement("li");
    specialAttack.innerText = "Special Attack";
    ul.append(specialAttack);

    specialAttack.addEventListener('click', () => {
      let ul = document.createElement("ul");
      monsters.forEach(monster => {
        let li = document.createElement("li");
        li.setAttribute("id", monster.uuid);
        li.classList.add("specialAttackClick");
        li.innerText = monster.name;
        ul.append(li);
      });

      let attackTargets = document.getElementById("attackTargets");
      attackTargets.innerHTML = "";
      attackTargets.append(ul);   
    })

    

    let heal = document.createElement("li");
    heal.setAttribute("id", "healClick");
    heal.classList.add("healClick");
    heal.innerText = "Heal";
    ul.append(heal);

    let runAway = document.createElement("li");
    runAway.innerText = "Run Away";

    runAway.addEventListener("click", () => {
      this.hideFightScene();
      this.showZoneOne();
    });

    ul.append(runAway);
    toAppend.appendChild(ul);
  }

  updateBattleText(battleText) {
    let container = document.getElementById("battleText");
    let currentText = container.innerText;
    container.innerText = `${battleText} \n ${currentText}`;
  }

  clearBattleText() {
    let container = document.getElementById("battleText");
    container.innerText = "";
  }

  removerMonsterFromAttackMenu(monsterID) {
    document.getElementById(monsterID).classList.add("none");
  }

  updateHeroLifeData(updatedLifeData) {
    let lifeData = document.getElementById("lifeData");
    lifeData.innerHTML = "";
    lifeData.innerHTML = `The hero's life is ${updatedLifeData}`;
  }
}
