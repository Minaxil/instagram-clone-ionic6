import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  search = [
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
    {
      url : "https://picsum.photos/400"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
