export class Hero {
  constructor(name) {
    this.name = name;
    this.uuid = this.createGuid();
  }

  level = 1;
  power = this.level * 10;
  health = 100;
  image = "path/to/some/image.jpg";
  xp = 0;
  xpToNextLevel = 30;
  KOed = false;

  attack() {
    let attack = Math.random() * this.power;
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
    let max = this.power * 6;
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

  generateHeroSprite() {
    let heroSprite = document.createElement("img");
    heroSprite.setAttribute("src", "/assets/images/wizard.png");
    heroSprite.setAttribute("width", "250px")
    heroSprite.setAttribute("height", "250px")
    return heroSprite;
  }
}
