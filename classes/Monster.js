export class Monster {
  constructor(zone, area) {
    this.uuid = this.createGuid();
    this.level = this.getLevel(zone, area);
    this.power = this.level * 10;
    this.name = this.monsterNames[this.level - 1];
  }

  health = 20;
  image = "path/to/some/image.jpg";
  xp = 0;
  xpToNextLevel = 30;
  KOed = false;
  monsterNames = [
    "The Unknown",
    "Emberhag",
    "The Crazy Entity",
    "Vortexhood",
    "Hollow Man",
    "Feral Nether",
    "Jagged Freak",
    "Chaotic Vision",
    "Blightghoul",
    "Stinkflayer",
    "The Great Unknown",
    "The Great Emberhag"
  ];


  attack() {
    let attack = Math.random() * (this.power * 2);
    attack = Math.trunc(attack);
    return attack;
  }

  specialAttack() {
    let min = this.power * 1;
    let max = this.power * 2;
    let attack = Math.floor(Math.random() * (max - min + 1)) + min;
    attack = Math.trunc(attack);
    return attack;
  }

  heal() {
    let min = this.power * 2;
    let max = this.power * 7;
    let heal = Math.floor(Math.random() * (max - min + 1)) + min;
    heal = Math.trunc(heal);
    return heal;
  }

  runaway() {
    let success = Math.floor(Math.random() * 2);
    if (success === 0) {
      success = true;
    } else {
      success = false;
    }
    return success;
  }

  takeDamage(damage) {
    this.health = this.health - damage;
    return this.health;
  }

  getXP(xp) {
    this.xp += xp;
    return this.xp;
  }

  updateXP(xp) {
    this.xpToNextLevel -= xp;
    return this.xpToNextLevel;
  }

  createGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  getLevel(zone, area) {
    if (zone === 1) {
      let min = 1;
      let max = min + area;
      let level = Math.floor(Math.random() * (max - min + 1)) + min;
      this.health = level * 10;
      return level;
    } else if (zone === 2) {
      let min = 4;
      let max = min + area;
      let level = Math.floor(Math.random() * (max - min + 1)) + min;
      this.health = level * 10;
      return level;
    } else if (zone === 3) {
      let min = 7;
      let max = min + area;
      let level = Math.floor(Math.random() * (max - min + 1)) + min;
      this.health = level * 10;
      return level;
    }
  }

  generateMonsterSprite(monster) {
    let monsterSprite = document.createElement("img");
    monsterSprite.setAttribute("width", "250px");
    monsterSprite.setAttribute("height", "250px");

    if (monster.level == 1) {
      monsterSprite.setAttribute("src", "./assets/images/goblin-001.png");
      return monsterSprite;
    } else if (monster.level == 2) {
      monsterSprite.setAttribute("src", "./assets/images/goblin-002.png");
      return monsterSprite;
    } else if (monster.level == 3) {
      monsterSprite.setAttribute("src", "./assets/images/goblin-003.png");
      return monsterSprite;
    }
  }
}
