import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {

  @Input() data : any;
  constructor() { }

  ngOnInit() {}

}
