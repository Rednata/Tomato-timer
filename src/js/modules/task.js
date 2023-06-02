const createID = () => {
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

class Task {
  #taskName;
  #count;
  constructor(taskName, count = 0) {
    this.#taskName = taskName;
    this.#count = count;
    this.id = createID()
  }

  set taskName(data) {
    console.log('You can`t');
  };

  set count(data) {
    console.log('You can`t');
  };

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
  constructor(taskName, importance, count = 0) {
    super(taskName, count);
    this.importance = importance
  }
}

class StandardTask extends Task {
  constructor(taskName, importance, count = 0) {
    super(taskName, count);
    this.importance = importance || 'standard'
  }
}

class UnimportantTask extends Task {
  constructor(taskName, importance, count = 0) {
    super(taskName, count);
    this.importance = importance
  }
}

export class TaskFactory {
  static list = {
    important: ImportantTask,
    standard: StandardTask,
    unimportant: UnimportantTask
  };

  create(name, importance, count) {
    const TaskClass = TaskFactory.list[importance] || TaskFactory.list.standard;    
    return new TaskClass(name, importance, count);    
  }
}

