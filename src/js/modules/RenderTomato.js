import { ControllerTomato } from "./ControllerTomato.js";
import { Tomato } from "./Tomato.js";

export class RenderTomato {
  constructor(commonParent, listParent) {

    this.controller = new ControllerTomato();
    this.formElement = this.createForm(commonParent, listParent);

    this.bindListeners();
  }

  createForm(commonParent, listParent) {
    this.commonParent = commonParent;
    this.listParent = listParent;

    this.form = document.createElement('form');
    this.form.className = 'task-form';
    this.form.action = 'submit';

    this.input = document.createElement('input');
    this.input.className = "task-name input-primary";
    this.input.type = 'text';
    this.input.name = 'task-name';
    this.input.id = 'task-name';
    this.input.placeholder = 'название задачи';

    this.buttonForm = document.createElement('button');
    this.buttonForm.className = "button button-importance default";
    this.buttonForm.type = 'button';

    this.buttonFormSubmit = document.createElement('button');
    this.buttonFormSubmit.className = "button button-primary task-form__add-button";
    this.buttonFormSubmit.type = 'submit';
    this.buttonFormSubmit.textContent = 'Добавить';

    this.form.append(this.input, this.buttonForm, this.buttonFormSubmit);

    return this.form
  }

  createActiveTask(taskName) {
    if (this.commonParent.firstElementChild.classList.contains('window__panel')) {        
      this.commonParent.firstElementChild.remove();
    }
    
    this.panel = document.createElement('div');
    this.panel.className = "window__panel";
    this.panelTitle = document.createElement('p');
    this.panelTitle.className = "window__panel-title";
    this.panelTitle.textContent = `${taskName}`;
    this.panelTaskText = document.createElement('div');
    this.panelTaskText.className = "window__panel-task-text";
    this.panelTaskText.textContent = "Томат 2";

    this.panel.append(this.panelTitle, this.panelTaskText);

    this.renderActiveTask();
  }

  createLiTask(taskName, id) {    
    this.li = document.createElement('li');
    this.li.className = "pomodoro-tasks__list-task ";
    this.li.dataset.id = id;
    this.span = document.createElement('span');
    this.span.className = "count-number";
    this.span.textContent = "0";
    this.buttonTask = document.createElement('button');
    this.buttonTask.className = "pomodoro-tasks__task-text";
    this.buttonTask.textContent = `${taskName}`;
    this.buttonMenu= document.createElement('button');
    this.buttonMenu.className = "pomodoro-tasks__task-button";

    this.li.append(this.span, this.buttonTask, this.buttonMenu);
    this.renderList()
    return this.li;
  }

  renderForm() {
    this.commonParent.append(this.form);        
  }

  renderList() {    
    this.listParent.append(this.li);
  }

  renderActiveTask() {
    this.commonParent.prepend(this.panel);
  }

  bindListeners() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.controller.submitForm(this.input, this); 
      this.form.reset();
    })

    this.listParent.addEventListener('click', ({target}) => {
      if (target.closest('li')) {        
        this.controller.addInActive(target.closest('li'), this);                
      }      

        
    })

  }

}