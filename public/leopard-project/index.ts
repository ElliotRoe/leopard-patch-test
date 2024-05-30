import { Project } from 'leopard';

import Stage from './Stage/Stage.js';
import TheRock from './TheRock/TheRock.js';

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  TheRock: new TheRock({
    x: 0,
    y: 30,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: true,
    layerOrder: 1,
  }),
};

export const theRockProject = new Project(stage, sprites);
