export class Hero {

  constructor(name) {
    this.name = name;
    this.uuid = _createGuid();
    this.level = 1;
    this.power = this.level * 10;
    this.health = 100;
    this.xp = 0;
    this.xpToNextLevel = 30;
    this.KOed = false;
  }

  isKOed(){
     if(this.health <= 0){
      return true
    } else if (this.health > 0){
      return false
    }
  }

  getHealth(){
    return this.health;
  }

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

  takeHeal(healAmmount){
    this.health = this.health + healAmmount;
    return this.health
  }

  healToFull(){
    this.health = 100;
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

  generateHeroSprite() {
    let heroSprite = document.createElement("img");
    heroSprite.setAttribute("src", "../assets/images/wizard.png");
    heroSprite.setAttribute("width", "250px");
    heroSprite.setAttribute("height", "250px");
    return heroSprite;
  }
}

function _createGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}