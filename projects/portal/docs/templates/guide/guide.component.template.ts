import { Component } from '@angular/core';

@Component({
  templateUrl: './guide-<%- templateUrl %>.component.html',
  styles: [`
    ul {
      margin-left: 24px;
    }

    li {
      margin-left: 16px;
    }
  `],
  standalone: false
})
export class Guide<%- component %>Component { }
