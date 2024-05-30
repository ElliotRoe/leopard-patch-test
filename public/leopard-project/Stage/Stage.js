import { Costume, Stage as StageBase, Trigger } from 'leopard';

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume('blank', './leopard-project/Stage/costumes/blank.svg'),
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenstageclicked)];
  }

  *whenstageclicked() {
    console.log('Stage clicked');
    yield;
  }
}
