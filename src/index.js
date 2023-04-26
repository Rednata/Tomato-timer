import './scss/index.scss';

import './scss/index.scss';

import { Task } from './js/modules/classes.js';

const newTask = new Task('Write homework');
console.log(newTask);

newTask.taskName = 'rrrrrrrrrr';
console.log(newTask);

newTask.changeTaskName('sdfsdf');
console.log(newTask);

newTask.changeTaskCount();
newTask.changeTaskCount();
newTask.changeTaskCount();
console.log(newTask);

newTask.count = 5;
console.log(newTask);