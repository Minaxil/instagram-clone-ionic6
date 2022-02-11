import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  search = [
    {
      url : "https://picsum.photos/100"
    },
    {
      url : "https://picsum.photos/100"
    },
    {
      url : "https://picsum.photos/100"
    },
    {
      url : "https://picsum.photos/100"
    },
    {
      url : "https://picsum.photos/100"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
