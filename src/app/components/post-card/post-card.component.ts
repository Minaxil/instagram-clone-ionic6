import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {

  @Input() data : any;
  likeOrNot = false;

  constructor() { }

  ngOnInit() {}

  like(){
    console.log("ok")
    this.likeOrNot = !this.likeOrNot;
  }
}