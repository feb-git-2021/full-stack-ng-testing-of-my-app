import { Component, 
  OnInit, Input, OnChanges, Output, EventEmitter} 
from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit ,OnChanges{
@Input() rating:number
starWidth:number
@Output() ratingClicked:EventEmitter<string>=
new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
    this.starWidth=this.rating *70/5
  }
  ngOnChanges():void{
    //this.starWidth=this.rating *70/5
  }
  starClick():void{
    //this.ratingClicked.emit('the rating'+this.rating+ 'was clicked')
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
  }

}
