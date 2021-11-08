import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toDoItem',
  templateUrl: './toDoItem.component.html',
  styleUrls: ['./toDoItem.component.css'],
})
export class ToDoItemComponent implements OnInit {
  @Input() deleteItem!: (args: number) => void;
  @Input() item!: { id: number; text: string };

  constructor() {}

  ngOnInit() {}
}
