import { Costume, Sprite, Trigger } from 'leopard';

export default class TheRock extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        'costume1',
        './leopard-project/theRock/costumes/costume1.png',
        {
          x: 48,
          y: 50,
        }
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.costume = 'costume1';
    let count = 0;
    while (true) {
      this.say(
        `Can you smell what The Rock is cooking? It smells good x${++count}`,
        2
      );
      yield;
    }
  }
}
