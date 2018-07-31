import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-tabset-basic',
  templateUrl: './tabset-basic.html',
  styles: [
    `
    :host { color: gray;}

    :host ::ng-deep .tabset1 a.nav-link {
      color: red;
    }
    
    :host ::ng-deep .tabset1 a.nav-link.active {
        color: green;
    }
`
  ]
})
export class NgbdTabsetBasic { }
