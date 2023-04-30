import './scss/index.scss';
import { Task } from './js/modules/task.js';
import { Timer } from './js/modules/timer.js';

//  Создаем новую задачу:
const task1 = new Task('Просто новая задача');
const task2 = new Task('Вторая задача');
const task3 = new Task('Третья задача');

// Создаем таймер:
const timer = new Timer({
  time: 10,
  pause: 5,
  bigPause: 10,
});

//  Методы работы c таймером: 
timer.addTask(task1);
timer.addTask(task2);
timer.addTask(task3);

timer.addInActiveTask(task1);
console.log(timer);

timer.runTask();