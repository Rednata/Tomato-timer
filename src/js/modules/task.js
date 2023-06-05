import { comma } from "postcss/lib/list";

export class Task {
  #taskName;
  #count;
  constructor(taskName, count = 0) {
    this.#taskName = taskName;
    this.#count = count;
    this.id = this.createID()
    this.importance = '';
  }

  set taskName(data) {
    console.log('You can`t');
  };

  set count(data) {
    console.log('You can`t');
  };

  createID() {
    const symbolsForID = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const min = 1;
    const max = symbolsForID.length;
    let id = '';
    while (id.length < 6) {
      const index = (Math.floor(Math.random() * (max - min + 1) + min));    
      id += symbolsForID[index];
    }
    return id;
  }

  get getTaskCount() {
    return this.#count;
  }  

  get taskName() {
    return this.#taskName;
  }  

  changeTaskName(data) {
    this.#taskName = data;
    return this;
  }

  changeTaskCount() {
    this.#count++;
    return this;
  }

};

class ImportantTask extends Task {
  constructor(taskName, count = 0) {
    super(taskName, count);
    this.task.importance = 'importance';
  }
}

class StandardTask extends Task {
  constructor(taskName, count = 0) {
    super(taskName, count);
    this.importance = 'standard'
  }
}

class UnimportantTask extends Task {
  constructor(taskName, count = 0) {
    super(taskName, count);
    this.importance = 'unimportance'
  }
}

export class CommandImportanceTask {
  command(commandName, text) {
    let CommandName;
    if (commandName === 'standard') {
      CommandName = StandardTask            
    } else if (commandName === 'importance') {
      CommandName = ImportantTask            
    } else if (commandName === 'unimportance') {
      CommandName = UnimportantTask            
    } 
    return new CommandName(text);
  }
}






