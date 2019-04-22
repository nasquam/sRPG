"use strict";

import { Game } from "./classes/Game.js";
import { Hero } from "./classes/Hero.js";
import { Monster } from "./classes/Monster.js";
import { Boss } from "./classes/Boss.js";
import { UI } from "./classes/UI.js";

let game = new Game();
let hero = new Hero("Steven");
// let boss = new Boss("Mister Murder", 1, 10, 10);
let ui = new UI();

// Setup the Screen 
ui.initUI()

// Event Listeners
document.addEventListener("click", event => {
  const monsters = [];
  const monsterSprites = [];
  let id = event.target.id;
  let target = document.getElementById(id);

  if (target.classList.contains("fight")) {
    let fightZone = game.calculateMonsterLevel(target);
    let monsterCount = game.generateEnemyCount();

    for (let i = 0; i < monsterCount; i++) {
      // When you call the new Monster constructor
      // the zone values are 1, 2, 3
      // the area values are 0, 1, 2
      let monster = new Monster(fightZone.zone, fightZone.area);
      monsters.push(monster);
      monsterSprites.push(monster.generateMonsterSprite(monster))
    }

    ui.hideZoneOne();
    ui.hideZoneTwo();
    ui.hideZoneThree();
    ui.showFightScene();
    let heroSprite = hero.generateHeroSprite()
    ui.placeHero(heroSprite);
    ui.placeMonsters(monsterSprites)

    let attackMenu = ui.showAttackWindow(monsters, "attackMenu");

    game.beginBattle(hero, monsters)
  }
});

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