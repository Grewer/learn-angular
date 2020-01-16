import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less']
})
export class TODOListComponent implements OnInit {
  lists = []
  input = new FormControl('');

  constructor() {
  }

  ngOnInit() {
    console.log('init');
  }

  addList = () => {
    console.log(this.input);
    this.lists.push(this.input.value);
  }

  remove(index) {
    this.lists.splice(index,1);
  }
}
