import { Tomato } from "./Tomato.js";

export class ControllerTomato {
  constructor() {    
    const options = {
      time: 30,
      break: 5,
      bigBreak: 15
    }
    this.tomato = new Tomato(options);
  }

  submitForm(elem, view) {            
    this.tomato.createTask(elem.value, view);         
  }

  addInActive(currentRow, view) {        
    this.removeActiveState(view.listParent);
    this.setActiveState(currentRow);
    

    const currentTask = this.getActiveTask(currentRow, this.tomato.taskArray);
    this.tomato.addInActiveTask(currentTask, view);
  }

  removeActiveState(listTask) {
    const arrayTasks = listTask.querySelectorAll('li .pomodoro-tasks__task-text');
    arrayTasks.forEach(elem => elem.classList.remove('pomodoro-tasks__task-text_active'))
  }

  setActiveState(currentRow) {    
    currentRow.querySelector('button').classList.add('pomodoro-tasks__task-text_active');    
  }

  getActiveTask(currentRow, taskArray) {
    const currentID = currentRow.dataset.id;    
    return taskArray.find(task => task.id === currentID);    
  }

  // getIDActiveTask(currentRow) {
  //   return currentRow.dataset.id
  // }

  
}