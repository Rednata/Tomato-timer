import { Task, CommandImportanceTask } from "./Task.js";

export class Tomato {
  constructor({time = 25, pause = 5, bigPause = 15, taskArray = []}) {
    if (Tomato._instance) {
      return Tomato._instance
    }
    this.time = time;
    this.pause = pause;
    this.bigPause = bigPause;
    this.taskArray = taskArray;
    this.activeTaskID = null;
    this.activeTask = null;
    Tomato._instance = this;
    
  }

  createTask(text, view) {
    const taskWrap = new CommandImportanceTask();
    const task = taskWrap.command('standard', text);

    this.addTask(task);    
    view.createLiTask(text, task.id);
  }

  addTask(task) {    
    this.taskArray.push(task);            
  }
  
  addInActiveTask(task, view) {
      this.activeTaskID = task.id;
      this.activeTask = task;
      view.createActiveTask(this.activeTask.taskName);      
  }

  runBreak(time, activeTask) {
    let seconds = 0;
    const timerId = setInterval(() => {      
      console.log(seconds++);    
      if (seconds >= time) {        
        clearInterval(timerId);
        this.runTimer(activeTask)
      }    
    }, 1000);
  }
  
  runTimer(activeTask) {
    let seconds = 0;
    const timerId = setInterval(() => {      
      console.log(seconds++);    
      if (seconds >= this.time) {        
        clearInterval(timerId);
        activeTask.changeTaskCount();     
        if (activeTask.getTaskCount >= 3 )   {
          console.log('Biiiiiiig break!');
          this.runBreak(this.bigPause,activeTask);
        } else {
          console.log('Small break');
          this.runBreak(this.pause, activeTask);
        }
        
      }    
    }, 1000);
  }

  runTask() {
    const activeTaskID = this.activeTaskID;
    const activeTask = this.taskArray.find(task => task.id === activeTaskID);
    
    if (activeTask) {
      this.runTimer(activeTask);
    } else {
      console.error('U havn`t active task');
      
    }    
  }
}

