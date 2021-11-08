import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  toDo: string = '';
  showError: boolean = false;

  list: { id: number; text: string }[] = [
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Clean the house' },
    { id: 3, text: 'Decide which security system to buy.' },
    { id: 4, text: 'Look at Xfinity options. ' },
  ];

  constructor() {}

  ngOnInit() {}

  deleteItem = (id: number): void => {
    this.list = this.list.filter((list) => list.id !== id);
  };

  generateId = () => {
    if (this.list && this.list.length) {
      return Math.max(...this.list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };
  displayError = () => {
    console.log('display error');
    this.showError = true;
    const clearTimer = setTimeout(() => (this.showError = false), 3000);
    return () => clearTimeout(clearTimer);
  };
  createNewToDoItem = () => {
    //validate todo
    if (!this.toDo) {
      this.displayError();
      return;
    }

    console.log(this.toDo);
    const newId = this.generateId();
    const newToDo = { id: newId, text: this.toDo };
    this.list.push(newToDo);
    console.log(this.list);
    this.toDo = '';
  };

  handleKeyPressEvent = (e: any) => {
    if (e.key === 'Enter') {
      this.createNewToDoItem();
    }
  };

  handleInputEvent = (e: any) => {
    this.toDo = e.target.value;
  };
}
