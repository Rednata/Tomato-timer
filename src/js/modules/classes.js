const createID = () => {
  const min = 1;
  const max = 1000
  return String(Math.floor(Math.random() * (max - min + 1) + min)); 
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

  changeTaskName(data) {
    this.#taskName = data;
    return this;
  }

  changeTaskCount() {
    this.#count++;
    return this;
  }

};