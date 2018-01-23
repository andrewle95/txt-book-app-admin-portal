import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checked-out-books',
  templateUrl: './checked-out-books.component.html',
  styleUrls: ['./checked-out-books.component.css']
})
export class CheckedOutBooksComponent implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
