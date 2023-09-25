class Fighter {
    public health:number
    public power:number
    public speed:number
    public magic:number
    public intelligence:number
    public energy:number


    constructor(health:number,power:number,speed:number,magic:number,intelligence:number,energy:number){
      this.health = health
      this.power = power
      this.speed = speed
      this.magic = magic
      this.intelligence = intelligence
      this.energy = energy
    }

    train(){
      this.energy -=10
      this.power++
      this.speed++
      this.magic++
      this.intelligence++
    }

    specialPower(){
      this.power++
    }

}

class Hero extends Fighter{
  constructor(health:number,power:number,speed:number,magic:number,intelligence:number,energy:number) {
    super(health,power,speed,magic,intelligence,energy)
  }

  override train(){
    this.energy -=10
    this.power += 10
    this.speed += 10
    this.magic += 10
    this.intelligence +=10
  }

    override specialPower(): void {
        this.energy = 0
        this.power *= 2
  }


}

class Sage extends Fighter{
  constructor(health:number,power:number,speed:number,magic:number,intelligence:number,energy:number) {
    super(health,power,speed,magic,intelligence,energy)
  }

  override train(){
    this.energy -=5
    this.power += 5
    this.speed += 5
    this.magic += 10
    this.intelligence +=10
  }

    override specialPower(): void {
        this.energy = 0
        this.magic *= 2
  }


}

class Barbarian extends Fighter{
  constructor(health:number,power:number,speed:number,magic:number,intelligence:number,energy:number) {
    super(health,power,speed,magic,intelligence,energy)
  }
  override train(){
    this.energy -=5
    this.power += 10
    this.speed += 10
    this.magic += 5
    this.intelligence +=5
  }

    override specialPower(): void {
        this.energy = 0
        this.health *= 2
  }


}
class DemonLord extends Fighter{
  constructor(health:number,power:number,speed:number,magic:number,intelligence:number,energy:number) {
    super(health,power,speed,magic,intelligence,energy)
  }
  override train(){
    this.energy -=10
    this.power += 15
    this.speed += 15
    this.magic += 15
    this.intelligence +=15
  }

    override specialPower(): void {
        this.energy = 0
        this.power *= 2
        this.health *=2
  }

}

class General extends Fighter{
  constructor(health:number,power:number,speed:number,magic:number,intelligence:number,energy:number) {
    super(health,power,speed,magic,intelligence,energy)
  }
  override train(){
    this.energy -=5
    this.power += 5
    this.speed += 5
    this.magic += 5
    this.intelligence +=5
  }

    override specialPower(): void {
        this.energy = 0
        this.power++
        this.health++
        this.speed++
        this.magic++
        this.intelligence++
  }

}

class Soldier extends Fighter{
  constructor(health:number,power:number,speed:number,magic:number,intelligence:number,energy:number) {
    super(health,power,speed,magic,intelligence,energy)
  }
  override train(){
    this.energy -=2
    this.power += 2
    this.speed += 2
    this.magic += 2
    this.intelligence +=2
  }

    override specialPower(): void {
        this.energy = 0
        this.intelligence += 20
  }

}

const hero = new Hero(1000,10,10,10,10,7)
const sage = new Sage(500,5,5,10,10,3)
const barb = new Barbarian(100,10,5,5,5,3)

const demon = new DemonLord(2500,15,15,15,25,9)
const general =  new General(1800,8,8,8,18,4)
const soldier =  new Soldier(1300,3,3,3,13,1)

while(true){
    if(hero.energy >= 10 && hero.health <= hero.health/2){
        console.log("Hero Special Power")
        hero.specialPower()
    }
    else if(sage.energy >= 5 && sage.health <= sage.health/2){
        console.log("Sage Special Power")
        sage.specialPower()
    }
    else if(barb.energy >= 5 && barb.health <= barb.health/2){
        console.log("Barbarian Special Power")
        barb.specialPower()
    }
    else if(demon.energy >= 10 && demon.health <= 100){
        console.log("The Demon Lord Special Power")
        demon.specialPower()
    }
    else if(general.energy >= 5 && general.health <= 300){
        console.log("The General Specia Power")
        general.specialPower()
    }
    else if(soldier.energy >= 2 && soldier.health <= 10){
        console.log("The Soldier Special Power")
        soldier.specialPower()
    }
    else if(hero.energy >= 10){
        console.log("Hero is training")
        hero.train()
    }
    else if(sage.energy >= 5){
        console.log("Sage is training")
        sage.train()
    }
    else if(barb.energy >= 5){
        console.log("Barbarian is training")
        barb.train()
    }
    else if(demon.energy >= 10){
        console.log("The demon lord is training")
        demon.train()
    }
    else if(general.energy >= 5){
        console.log("The general is training")
        general.train()
    }
    else if(soldier.energy >= 2){
        console.log("The soldier is training")
        soldier.train()
    }
    else{
        let hint = hero.intelligence + sage.intelligence + barb.intelligence
        let dint = demon.intelligence + general.intelligence + soldier.intelligence
        let hpower = hero.power + sage.magic + barb.power
        let dpower = demon.power + general.power + soldier.power + demon.magic
        if(hint>dint){
            if(demon.health <= hpower){
                demon.health = 0
            }
            else{
                demon.health -= hpower
            }
            if(general.health <= hpower/2){
                general.health = 0
            }
            else{
                general.health -= hpower / 2
            }
            if(soldier.health <= hpower / 3){
                soldier.health = 0
            }
            else{
                soldier.health -= hpower / 3
            }
            if(demon.health == 0){
                console.log("The Demon Lord is defeated")
                if (general.health == 0){
                    console.log("The General has perished")
                    if (soldier.health == 0){
                        console.log("The Soldier has vanished")
                        console.log("The human win")
                        break
                    }
                }
            }
            else{
                console.log("Next Turn")
                demon.energy++
                general.energy++
                soldier.energy++
            }
        }
        else{
            if(hero.health <= hpower){
                hero.health = 0
            }
            else{
                hero.health -= hpower
            }
            if(sage.health <= hpower/2){
                sage.health = 0
            }
            else{
                sage.health -= hpower / 2
            }
            if(barb.health <= hpower / 2){
                barb.health = 0
            }
            else{
                barb.health -= hpower / 3
            }
            if(hero.health == 0){
                console.log("The Hero is defeated")
                if (sage.health == 0){
                    console.log("The Sage has perished")
                    if (barb.health == 0){
                        console.log("The Barbarian has vanished")
                        console.log("The demons win")
                        break
                    }
                }
            }
            else{
                console.log("Next Turn")
                hero.energy++
                sage.energy++
                barb.energy++
            }
        }
    }




}