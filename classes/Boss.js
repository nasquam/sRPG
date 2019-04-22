export class Boss {
  constructor(name, zone, healBonus, attackBonus) {
    this.zone = zone
    this.attackBonus = attackBonus;
    this.healBonus = healBonus;
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
    let attack = Math.random() * (this.power * 2);
    attack = Math.trunc(attack);
    attack = attack + this.attackBonus;
    return attack;
  }

  specialAttack() {
    let min = this.power * 1;
    let max = this.power * 2;
    let attack = Math.floor(Math.random() * (max - min + 1)) + min;
    attack = attack + this.attackBonus;
    attack = Math.trunc(attack);
    return attack;
  }

  heal() {
    let min = this.power * 2;
    let max = this.power * 7;
    let heal = Math.floor(Math.random() * (max - min + 1)) + min;
    heal = heal + this.healBonus;
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

  takeHeal(heal) {
    this.health = this.health + heal;
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

  chooseAttack(){
    let min = this.power * 1;
    let max = this.power * 10;
    let attack = Math.floor(Math.random() * (max - min + 1)) + min

    if(attack < 60){
      return this.attack()
    } else if (attack >= 60 && attack < 80) {
      return this.specialAttack()
    } else {
      let heal = this.heal()
      this.takeHeal(heal)
      let string = `The boss has healed for: ${heal} it's health is ${this.health}`
      return 0
    }
  }

  createGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
