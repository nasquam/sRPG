/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./classes/Game.js":
/*!*************************!*\
  !*** ./classes/Game.js ***!
  \*************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./classes/UI.js\");\n\r\nlet ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"UI\"]();\r\n\r\nclass Game {\r\n  calculateMonsterLevel(target) {\r\n    if (target.classList.contains(\"levelOne\")) {\r\n      if (target.classList.contains(\"areaZero\")) {\r\n        return { zone: 1, area: 0 };\r\n      } else if (target.classList.contains(\"areaOne\")) {\r\n        return { zone: 1, area: 1 };\r\n      } else if (target.classList.contains(\"areaTwo\")) {\r\n        return { zone: 1, area: 2 };\r\n      }\r\n    }\r\n\r\n    if (target.classList.contains(\"levelTwo\")) {\r\n      if (target.classList.contains(\"areaZero\")) {\r\n        return { zone: 2, area: 0 };\r\n      } else if (target.classList.contains(\"areaOne\")) {\r\n        return { zone: 2, area: 1 };\r\n      } else if (target.classList.contains(\"areaTwo\")) {\r\n        return { zone: 2, area: 2 };\r\n      }\r\n    }\r\n\r\n    if (target.classList.contains(\"levelThree\")) {\r\n      if (target.classList.contains(\"areaZero\")) {\r\n        return { zone: 3, area: 0 };\r\n      } else if (target.classList.contains(\"areaOne\")) {\r\n        return { zone: 3, area: 1 };\r\n      } else if (target.classList.contains(\"areaTwo\")) {\r\n        return { zone: 3, area: 2 };\r\n      }\r\n    }\r\n  }\r\n\r\n  generateEnemyCount(){\r\n    let min = 1;\r\n    let max = 3;\r\n    let enemyCount = Math.floor(Math.random() * (max - min + 1)) + min;\r\n    return enemyCount;\r\n  }\r\n\r\n  beginBattle(hero, monsters, monsterID){\r\n\r\n    ui.updateBattleText(\" \")\r\n\r\n    monsters.forEach(monster => {\r\n      if (monsterID === monster.uuid) {\r\n        let heroDamage = hero.attack();\r\n        let monsterLife = monster.takeDamage(heroDamage);\r\n        if(monsterLife > 0){\r\n          ui.updateBattleText(`The hero hit ${monster.name} for ${heroDamage} point(s) of damage`);\r\n        } else {\r\n          ui.updateBattleText(`The hero hit ${monster.name} for ${heroDamage} point(s) of damage, and it has died`);\r\n          ui.removerMonsterFromAttackMenu(monsterID);\r\n        }\r\n      }\r\n\r\n      let monsterAttack = monster.attack()\r\n      hero.takeDamage(monsterAttack)\r\n      ui.updateHeroLifeData(hero.health)\r\n      ui.updateBattleText(`The hero took ${monsterAttack} points of damage from ${monster.name}`)\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./classes/Game.js?");

/***/ }),

/***/ "./classes/Hero.js":
/*!*************************!*\
  !*** ./classes/Hero.js ***!
  \*************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return Hero; });\nclass Hero {\r\n\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.uuid = this.createGuid();\r\n    this.level = 1;\r\n    this.power = this.level * 10;\r\n    this.health = 100;\r\n    this.xp = 0;\r\n    this.xpToNextLevel = 30;\r\n    this.KOed = false;\r\n  }\r\n\r\n  attack() {\r\n    let attack = Math.random() * this.power;\r\n    attack = Math.trunc(attack);\r\n    return attack;\r\n  }\r\n\r\n  specialAttack() {\r\n    let min = this.power * 1;\r\n    let max = this.power * 2;\r\n    let attack = Math.floor(Math.random() * (max - min + 1)) + min;\r\n    attack = Math.trunc(attack);\r\n    return attack;\r\n  }\r\n\r\n  heal() {\r\n    let min = this.power * 2;\r\n    let max = this.power * 6;\r\n    let heal = Math.floor(Math.random() * (max - min + 1)) + min;\r\n    heal = Math.trunc(heal);\r\n    return heal;\r\n  }\r\n\r\n  takeHeal(healAmmount){\r\n    this.health = this.health + healAmmount;\r\n    return this.health\r\n  }\r\n\r\n  runaway() {\r\n    let success = Math.floor(Math.random() * 2);\r\n    if (success === 0) {\r\n      success = true;\r\n    } else {\r\n      success = false;\r\n    }\r\n    return success;\r\n  }\r\n\r\n  takeDamage(damage) {\r\n    this.health = this.health - damage;\r\n    return this.health;\r\n  }\r\n\r\n  getXP(xp) {\r\n    this.xp += xp;\r\n    return this.xp;\r\n  }\r\n\r\n  updateXP(xp) {\r\n    this.xpToNextLevel -= xp;\r\n    return this.xpToNextLevel;\r\n  }\r\n\r\n  createGuid() {\r\n    return \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g, function(c) {\r\n      var r = (Math.random() * 16) | 0,\r\n        v = c === \"x\" ? r : (r & 0x3) | 0x8;\r\n      return v.toString(16);\r\n    });\r\n  }\r\n\r\n  generateHeroSprite() {\r\n    let heroSprite = document.createElement(\"img\");\r\n    heroSprite.setAttribute(\"src\", \"../assets/images/wizard.png\");\r\n    heroSprite.setAttribute(\"width\", \"250px\");\r\n    heroSprite.setAttribute(\"height\", \"250px\");\r\n    return heroSprite;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./classes/Hero.js?");

/***/ }),

/***/ "./classes/Monster.js":
/*!****************************!*\
  !*** ./classes/Monster.js ***!
  \****************************/
/*! exports provided: Monster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Monster\", function() { return Monster; });\nclass Monster {\r\n  constructor(zone, area) {\r\n    this.monsterNames = [\r\n      \"The Unknown\",\r\n      \"Emberhag\",\r\n      \"The Crazy Entity\",\r\n      \"Vortexhood\",\r\n      \"Hollow Man\",\r\n      \"Feral Nether\",\r\n      \"Jagged Freak\",\r\n      \"Chaotic Vision\",\r\n      \"Blightghoul\",\r\n      \"Stinkflayer\",\r\n      \"The Great Unknown\",\r\n      \"The Great Emberhag\"\r\n    ];\r\n\r\n    this.uuid = this.createGuid();\r\n    this.level = this.getLevel(zone, area);\r\n    this.power = this.level * 10;\r\n    this.name = this.monsterNames[this.level - 1];\r\n\r\n    this.health = 20;\r\n    this.xp = 0;\r\n    this.xpToNextLevel = 30;\r\n    this.KOed = false;\r\n  }\r\n\r\n\r\n\r\n  attack() {\r\n    let attack = Math.random() * (this.power * 1);\r\n    attack = Math.trunc(attack);\r\n    return attack;\r\n  }\r\n\r\n  specialAttack() {\r\n    let min = this.power * 1;\r\n    let max = this.power * 2;\r\n    let attack = Math.floor(Math.random() * (max - min + 1)) + min;\r\n    attack = Math.trunc(attack);\r\n    return attack;\r\n  }\r\n\r\n  heal() {\r\n    let min = this.power * 2;\r\n    let max = this.power * 7;\r\n    let heal = Math.floor(Math.random() * (max - min + 1)) + min;\r\n    heal = Math.trunc(heal);\r\n    return heal;\r\n  }\r\n\r\n  runaway() {\r\n    let success = Math.floor(Math.random() * 2);\r\n    if (success === 0) {\r\n      success = true;\r\n    } else {\r\n      success = false;\r\n    }\r\n    return success;\r\n  }\r\n\r\n  takeDamage(damage) {\r\n    this.health = this.health - damage;\r\n    return this.health;\r\n  }\r\n\r\n  getXP(xp) {\r\n    this.xp += xp;\r\n    return this.xp;\r\n  }\r\n\r\n  updateXP(xp) {\r\n    this.xpToNextLevel -= xp;\r\n    return this.xpToNextLevel;\r\n  }\r\n\r\n  createGuid() {\r\n    return \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g, function(c) {\r\n      var r = (Math.random() * 16) | 0,\r\n        v = c === \"x\" ? r : (r & 0x3) | 0x8;\r\n      return v.toString(16);\r\n    });\r\n  }\r\n\r\n  getLevel(zone, area) {\r\n    if (zone === 1) {\r\n      let min = 1;\r\n      let max = min + area;\r\n      let level = Math.floor(Math.random() * (max - min + 1)) + min;\r\n      this.health = level * 10;\r\n      return level;\r\n    } else if (zone === 2) {\r\n      let min = 4;\r\n      let max = min + area;\r\n      let level = Math.floor(Math.random() * (max - min + 1)) + min;\r\n      this.health = level * 10;\r\n      return level;\r\n    } else if (zone === 3) {\r\n      let min = 7;\r\n      let max = min + area;\r\n      let level = Math.floor(Math.random() * (max - min + 1)) + min;\r\n      this.health = level * 10;\r\n      return level;\r\n    }\r\n  }\r\n\r\n  generateMonsterSprite(monster) {\r\n    let monsterSprite = document.createElement(\"img\");\r\n    monsterSprite.setAttribute(\"width\", \"256px\");\r\n    monsterSprite.setAttribute(\"height\", \"256px\");\r\n\r\n    if (monster.level == 1) {\r\n      monsterSprite.setAttribute(\"src\", \"../assets/images/goblin-001.png\");\r\n      return monsterSprite;\r\n    } else if (monster.level == 2) {\r\n      monsterSprite.setAttribute(\"src\", \"../assets/images/goblin-002.png\");\r\n      return monsterSprite;\r\n    } else if (monster.level == 3) {\r\n      monsterSprite.setAttribute(\"src\", \"../assets/images/goblin-003.png\");\r\n      return monsterSprite;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./classes/Monster.js?");

/***/ }),

/***/ "./classes/UI.js":
/*!***********************!*\
  !*** ./classes/UI.js ***!
  \***********************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UI\", function() { return UI; });\nclass UI {\r\n  initUI() {\r\n    let zoneOne = document.getElementById(\"zoneOne\");\r\n    let zoneTwo = document.getElementById(\"zoneTwo\");\r\n    let zoneThree = document.getElementById(\"zoneThree\");\r\n    let navigation = document.getElementById(\"navigation\");\r\n    let lifeBar = document.getElementById(\"namePlate\");\r\n    let fightScene = document.getElementById(\"fightScene\")\r\n\r\n    fightScene.classList.add(\"none\")\r\n    zoneOne.classList.add(\"none\");\r\n    zoneTwo.classList.add(\"none\");\r\n    zoneThree.classList.add(\"none\");\r\n    navigation.classList.add(\"none\");\r\n    lifeBar.classList.add(\"none\");\r\n  }\r\n\r\n  showNavigation() {\r\n    navigation.classList.remove(\"none\");\r\n    navigation.classList.add(\"block\");\r\n  };\r\n\r\n  hideNavigation() {\r\n    navigation.classList.remove(\"block\");\r\n    navigation.classList.add(\"none\");\r\n  };\r\n\r\n  showNamePlate() {\r\n    namePlate.classList.remove(\"none\");\r\n    namePlate.classList.add(\"block\");\r\n  };\r\n\r\n  hideNamePlate() {\r\n    namePlate.classList.remove(\"block\");\r\n    namePlate.classList.add(\"none\");\r\n  };\r\n\r\n  showZoneHome() {\r\n    zoneHome.classList.remove(\"none\");\r\n    zoneHome.classList.add(\"block\");\r\n  };\r\n\r\n  hideZoneHome() {\r\n    zoneHome.classList.remove(\"block\");\r\n    zoneHome.classList.add(\"none\");\r\n  };\r\n\r\n  showZoneOne() {\r\n    zoneOne.classList.remove(\"none\");\r\n    zoneOne.classList.add(\"block\");\r\n  };\r\n\r\n  hideZoneOne() {\r\n    zoneOne.classList.remove(\"block\");\r\n    zoneOne.classList.add(\"none\");\r\n  };\r\n\r\n  showZoneTwo() {\r\n    zoneTwo.classList.remove(\"none\");\r\n    zoneTwo.classList.add(\"block\");\r\n  };\r\n\r\n  hideZoneTwo() {\r\n    zoneTwo.classList.remove(\"block\");\r\n    zoneTwo.classList.add(\"none\");\r\n  };\r\n\r\n  showZoneThree() {\r\n    zoneThree.classList.remove(\"none\");\r\n    zoneThree.classList.add(\"block\");\r\n  };\r\n\r\n  hideZoneThree() {\r\n    zoneThree.classList.remove(\"block\");\r\n    zoneThree.classList.add(\"none\");\r\n  };\r\n\r\n  showFightScene() {\r\n    fightScene.classList.remove(\"none\");\r\n    fightScene.classList.add(\"block\");\r\n  }\r\n\r\n  hideFightScene() {\r\n    fightScene.classList.remove(\"block\");\r\n    fightScene.classList.add(\"none\");    \r\n  }\r\n\r\n  placeHero(wizardSprite) {\r\n    let placementBox = document.getElementById(\"heroPlacementBox\")\r\n    placementBox.innerHTML = \"\";\r\n    placementBox.appendChild(wizardSprite);\r\n  }\r\n\r\n  placeMonsters(monsterSprites) {\r\n    let placementBox = document.getElementById(\"monsterPlacementBox\")\r\n    placementBox.innerHTML = \"\";\r\n    monsterSprites.forEach(monsterSprite => {\r\n      placementBox.appendChild(monsterSprite);\r\n    });\r\n  }\r\n\r\n  showAttackWindow(monsters, elementToAppend) {\r\n    let attackTargets = document.getElementById(\"attackTargets\");\r\n    attackTargets.innerHTML = \"\";\r\n\r\n    let toAppend = document.getElementById(elementToAppend)\r\n    toAppend.innerHTML = \"\";\r\n\r\n    let ul = document.createElement(\"ul\");\r\n    let attack = document.createElement(\"li\")\r\n    attack.innerText = \"Attack\"\r\n    ul.append(attack)\r\n\r\n    attack.addEventListener('click' , () =>{\r\n      let ul = document.createElement(\"ul\");\r\n      monsters.forEach(monster => {\r\n        let li = document.createElement('li')\r\n        li.setAttribute('id',monster.uuid)\r\n        li.classList.add(\"monsterClick\")\r\n        li.innerText = monster.name\r\n        ul.append(li)\r\n      });\r\n\r\n      let attackTargets = document.getElementById(\"attackTargets\");\r\n      attackTargets.innerHTML = \"\";\r\n      attackTargets.append(ul)\r\n\r\n    })\r\n\r\n    let specialAttack = document.createElement(\"li\")\r\n    specialAttack.innerText = \"Special Attack\"\r\n    ul.append(specialAttack)\r\n\r\n    let heal = document.createElement(\"li\")\r\n    heal.innerText = \"Heal\"\r\n    heal.classList.add(\"healHero\")\r\n    ul.append(heal)\r\n\r\n    let runAway = document.createElement(\"li\")\r\n    runAway.innerText = \"Run Away\"\r\n\r\n    runAway.addEventListener('click', () => {\r\n      this.hideFightScene();\r\n      this.showZoneOne();\r\n    })\r\n\r\n    ul.append(runAway)\r\n    toAppend.appendChild(ul)\r\n  }\r\n\r\n  updateBattleText(battleText){\r\n    let container = document.getElementById(\"battleText\");\r\n    let currentText = container.innerText;\r\n    container.innerText = `${battleText} \\n ${currentText}`;\r\n  }\r\n\r\n  clearBattleText(){\r\n    let container = document.getElementById(\"battleText\");\r\n    container.innerText = \"\"\r\n  }\r\n\r\n\r\n\r\n  removerMonsterFromAttackMenu(monsterID){\r\n    document.getElementById(monsterID).classList.add(\"none\")\r\n  }\r\n\r\n  updateHeroLifeData(updatedLifeData){\r\n    let lifeData = document.getElementById('lifeData');\r\n    lifeData.innerHTML = \"\"\r\n    lifeData.innerHTML = `The hero's life is ${updatedLifeData}`\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./classes/UI.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Game.js */ \"./classes/Game.js\");\n/* harmony import */ var _classes_Hero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Hero.js */ \"./classes/Hero.js\");\n/* harmony import */ var _classes_Monster_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Monster.js */ \"./classes/Monster.js\");\n/* harmony import */ var _classes_UI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/UI.js */ \"./classes/UI.js\");\n\r\n\r\n\r\n\r\n\r\n// import { Boss } from \"./classes/Boss.js\";\r\n\r\n\r\nlet game = new _classes_Game_js__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]();\r\nlet hero = new _classes_Hero_js__WEBPACK_IMPORTED_MODULE_1__[\"Hero\"](\"Steven\");\r\n// let boss = new Boss(\"Mister Murder\", 1, 10, 10);\r\nlet ui = new _classes_UI_js__WEBPACK_IMPORTED_MODULE_3__[\"UI\"]();\r\nlet monsters = [];\r\n// Setup the Screen\r\nui.initUI();\r\n\r\n// Event Listeners\r\ndocument.addEventListener(\"click\", event => {\r\n  const monsterSprites = [];\r\n  let id = event.target.id;\r\n  let target = document.getElementById(id);\r\n\r\n  if (target.classList.contains(\"fight\")) {\r\n    ui.clearBattleText();\r\n    let fightZone = game.calculateMonsterLevel(target);\r\n    let monsterCount = game.generateEnemyCount();\r\n    monsters = [];\r\n    for (let i = 0; i < monsterCount; i++) {\r\n      // When you call the new Monster constructor\r\n      // the zone values are 1, 2, 3\r\n      // the area values are 0, 1, 2\r\n      let monster = new _classes_Monster_js__WEBPACK_IMPORTED_MODULE_2__[\"Monster\"](fightZone.zone, fightZone.area);\r\n      monsters.push(monster);\r\n      monsterSprites.push(monster.generateMonsterSprite(monster));\r\n    }\r\n\r\n    ui.hideZoneOne();\r\n    ui.hideZoneTwo();\r\n    ui.hideZoneThree();\r\n    ui.showFightScene();\r\n    let heroSprite = hero.generateHeroSprite();\r\n    ui.placeHero(heroSprite);\r\n    ui.placeMonsters(monsterSprites);\r\n    ui.showAttackWindow(monsters, \"attackMenu\");\r\n  }\r\n\r\n  if (target.classList.contains(\"monsterClick\")) {\r\n    // We have the event ID of the monster was clicked\r\n    let monsterID = event.target.id;\r\n    game.beginBattle(hero, monsters, monsterID);\r\n  }\r\n\r\n  console.log(event.target)\r\n\r\n  // if (target.classList.contains(\"healHero\")) {\r\n  //   // We have the event ID of the monster was clicked\r\n  //   alert(\"Heal Hero\")\r\n  // }\r\n\r\n});\r\n\r\n// Event listeners to show and hide areas of the screen\r\ndocument.getElementById(\"closeWelcome\").addEventListener(\"click\", () => {\r\n  ui.hideZoneHome();\r\n  ui.showNavigation();\r\n  ui.showNamePlate();\r\n  ui.showZoneOne();\r\n});\r\n\r\ndocument.getElementById(\"jumpZoneHome\").addEventListener(\"click\", () => {\r\n  ui.hideNamePlate();\r\n  ui.hideNavigation();\r\n  ui.hideZoneOne();\r\n  ui.hideZoneTwo();\r\n  ui.hideZoneThree();\r\n  ui.showZoneHome();\r\n});\r\n\r\ndocument.getElementById(\"jumpZoneOne\").addEventListener(\"click\", () => {\r\n  ui.showZoneOne();\r\n  ui.hideZoneTwo();\r\n  ui.hideZoneThree();\r\n});\r\n\r\ndocument.getElementById(\"jumpZoneTwo\").addEventListener(\"click\", () => {\r\n  ui.hideZoneOne();\r\n  ui.showZoneTwo();\r\n  ui.hideZoneThree();\r\n});\r\n\r\ndocument.getElementById(\"jumpZoneThree\").addEventListener(\"click\", () => {\r\n  ui.hideZoneOne();\r\n  ui.hideZoneTwo();\r\n  ui.showZoneThree();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });