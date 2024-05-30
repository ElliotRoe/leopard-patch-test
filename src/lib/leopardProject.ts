import { Costume, Sprite, Stage as StageBase, Project } from 'leopard';

class TheRock extends Sprite {
  constructor(...args: any[]) {
    super(...args);

    this.costumes = [
      new Costume(
        'costume1',
        './leopard-project/theRock/costumes/costume1.png',
        {
          x: 200,
          y: 250,
        }
      ),
    ];

    this.visible = true;
  }
}

class Stage extends StageBase {
  constructor(...args: any[]) {
    super(...args);

    this.costumes = [
      new Costume(
        'backdrop1',
        '/leopard-project/Stage/costumes/backdrop1.svg',
        {
          x: 125.00153898879995,
          y: 156.4825870646767,
        }
      ),
    ];
  }
}

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  TheRock: new TheRock({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: true,
  }),
};

console.log('sprites', sprites);

export const theRockProject = new Project(stage, sprites);
