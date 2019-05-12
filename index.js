"use strict";

import { Game } from "./classes/Game.js";
import { Hero } from "./classes/Hero.js";
import { Monster } from "./classes/Monster.js";
// import { Boss } from "./classes/Boss.js";
import { UI } from "./classes/UI.js";

let game = new Game();
let hero = new Hero("Steven");

// let boss = new Boss("Mister Murder", 1, 10, 10);
let ui = new UI();
let monsters = [];
// Setup the Screen
ui.initUI();

let fightScenes = document.querySelectorAll('img.fight')

const initFight = (event) => {

  const monsterSprites = [];
  let target = event.target;

  ui.clearBattleText();
  let fightZone = game.calculateMonsterLevel(target);
  let monsterCount = game.generateEnemyCount();
  monsters = [];
  for (let i = 0; i < monsterCount; i++) {
    // When you call the new Monster constructor
    // the zone values are 1, 2, 3
    // the area values are 0, 1, 2
    let monster = new Monster(fightZone.zone, fightZone.area);
    monsters.push(monster);
    monsterSprites.push(monster.generateMonsterSprite(monster));
  }

  ui.hideZoneOne();
  ui.hideZoneTwo();
  ui.hideZoneThree();
  ui.showFightScene();
  let heroSprite = hero.generateHeroSprite();
  ui.placeHero(heroSprite);
  ui.placeMonsters(monsterSprites);
  ui.showAttackWindow(monsters, "attackMenu");
}

fightScenes.forEach(fightScene => {
  fightScene.addEventListener('click', initFight)
});

// Event Listeners
document.addEventListener("click", event => {
  // const monsterSprites = [];
  let id = event.target.id;
  let target = document.getElementById(id);



  if (target.classList.contains("attackClick")) {
    // We have the event ID of the monster was clicked
    let monsterID = event.target.id;
    game.heroAttacks(hero, monsters, monsterID);
  }

  if (event.target.classList.contains("healClick")) {
    game.heroHeals(hero, monsters)
  }

  if (event.target.classList.contains('specialAttackClick')){
    let monsterID = event.target.id;
    game.heroSpecialAttacks(hero, monsters, monsterID);
  }

  if(hero.getHealth() < 1){
    console.log("Lose game")
    ui.showYouLose();
  }

});

//
document.getElementById("healHeroToFull").addEventListener('click', () => {
  hero.healToFull();
})

// Event listeners to show and hide areas of the screen
document.getElementById("closeWelcome").addEventListener("click", () => {
  ui.hideZoneHome();
  ui.showNavigation();
  ui.showNamePlate();
  ui.showZoneOne();
});

document.getElementById("jumpZoneHome").addEventListener("click", () => {
  ui.hideNamePlate();
  ui.hideNavigation();
  ui.hideZoneOne();
  ui.hideZoneTwo();
  ui.hideZoneThree();
  ui.showZoneHome();
});

document.getElementById("jumpZoneOne").addEventListener("click", () => {
  ui.showZoneOne();
  ui.hideZoneTwo();
  ui.hideZoneThree();
});

document.getElementById("jumpZoneTwo").addEventListener("click", () => {
  ui.hideZoneOne();
  ui.showZoneTwo();
  ui.hideZoneThree();
});

document.getElementById("jumpZoneThree").addEventListener("click", () => {
  ui.hideZoneOne();
  ui.hideZoneTwo();
  ui.showZoneThree();
});
