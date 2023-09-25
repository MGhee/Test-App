import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiceComponent } from './dice.component';

describe('DiceComponent', () => {
  let component: DiceComponent;
  let fixture: ComponentFixture<DiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiceComponent]
    });
    fixture =  TestBed.createComponent(DiceComponent);
    component =  fixture.componentInstance;
  });

  it('should create the app',() => {
    expect(component).toBeTruthy();
  });

  it('should initialize the dice at the start', () =>{
    expect(component.diceImage).toBeNull();
  });

  it('should set diceimage when it is called', () =>{
    component.rollDice();
    expect(component.diceImage).not.toBeNull();
  });

  it('should sert diceiomace to dice 1/2/3/4/5/6 depending ont he value of the roll', () =>{
    const numberRoled = component.rollDice();
    expect(component.diceImage).toBe(`assets/dice-${numberRoled}.png`);

  });

  it('should return a number between 1 and 6 when rolldice is called', () =>{
    const numberRoled = component.rollDice();

    expect(numberRoled).toBeGreaterThanOrEqual(1);
    expect(numberRoled).toBeLessThanOrEqual(6);
  });

  it('should set diceImage to 1 when rolledDice is called', () =>{
    spyOn(Math, 'random').and.returnValue(0);
    component.rollDice();
    expect(component.diceImage).toBe(`assets/dice-1.png`);
  });


});
