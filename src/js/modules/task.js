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

export class Task {
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

  changeTaskName(data) {
    this.#taskName = data;
    return this;
  }

  changeTaskCount() {
    this.#count++;
    return this;
  }

};