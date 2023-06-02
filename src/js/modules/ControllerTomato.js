import { Tomato } from "./Tomato.js";
import { TaskFactory } from "./Task.js";
import { RenderTomato } from "./RenderTomato.js";

export class ControllerTomato {
  constructor() {    
    const options = {
      time: 30,
      break: 5,
      bigBreak: 15
    }
    this.tomato = new Tomato(options);
  }

  submitForm(elem) {            
    const task = new TaskFactory();   
    const currentTask = task.create(elem.value)    
    this.tomato.addTask(currentTask); 
    return currentTask;           
  }

  addInActive(index) {
    
    this.tomato.addInActiveTask(this.tomato.taskArray[index]);    
  }

  
}