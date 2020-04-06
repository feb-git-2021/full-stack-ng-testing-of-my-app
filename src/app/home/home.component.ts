import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <img src="assets/images/home.jpeg" width="600" height="450"
      style="margin-top:20px;margin-right:50" title="upgrade browser to view the image"/>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
