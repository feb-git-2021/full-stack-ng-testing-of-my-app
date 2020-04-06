import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h3 id="heading">This Test1 component with Inline template
   and style</h3>
  <p>{{title}}</p>
  <button class="btn btn-primary">Click!!</button>

  `,
  
  styles: [    `
    p{
      color:red;
      font-size:2em;
    }`,
    `#heading{ 
      background-color:yellow;     
      color:green;
    }
    `,
    ]
})
export class Test1Component implements OnInit {
title:string='learning one way binding...'
  constructor() { }

  ngOnInit() {
  }

}
