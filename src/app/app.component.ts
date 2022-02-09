import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngPipe';

  elements = [
    'Z',
    'A',
    'C',
    'B',
    'X'
  ]

  elements2 = [
    {name: 'Z', value: 'CH01'},
    {name: 'A', value: 'CH02'},
    {name: 'C', value: 'CH03'},
    {name: 'B', value: 'CH04'},
    {name: 'X', value: 'CH05'}
  ]
}
