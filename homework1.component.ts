import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.css']
})
export class Homework1Component implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  getTitle() {
    return 'Title';
  }
}
