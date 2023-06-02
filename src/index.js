import './scss/index.scss';
import { TaskFactory } from './js/modules/Task.js';
import { Tomato } from './js/modules/Tomato.js';
import { RenderTomato } from './js/modules/RenderTomato.js';

import { ControllerTomato } from './js/modules/ControllerTomato.js';
import { list } from 'postcss';

const commonParent = document.querySelector('.pomodoro-form');
const listParent = document.querySelector('.pomodoro-tasks__quest-tasks');

// const view = new RenderTomato(commonParent, listParent);

// view.renderForm()

const model = new Tomato({
  time: 25,
  pause: 5,
  bigPause: 15
});

const view = new RenderTomato(commonParent, listParent);
// const view = new RenderTomato(commonParent, listParent, controller);
view.renderForm();

