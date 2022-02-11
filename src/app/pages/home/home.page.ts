import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  stories = [
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    },
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    }
    ,
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    },
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    }
    ,
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    },
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    }
    ,
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    },
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    }
    ,
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    },
    {
      id : 1,
      image : "https://picsum.photos/100",
      name : "Lorem"
    }
  ]
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView : 4,
    spaceBetween : 10
  };

  pages = 1;
  limit = 10;
  posts = [];

  ipadOrNot = false;
  constructor(
    private platform : Platform,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    console.log(this.platform.is("ipad"));
    this.ipadOrNot = this.platform.is("ipad");

    if(this.ipadOrNot){
      this.slideOpts = {
        initialSlide: 0,
        speed: 400,
        slidesPerView : 7,
        spaceBetween : 10
      }
    }

    this.getPosts(this.pages, this.limit);
  }

  getPosts(pages, limit){
    this.apiService.getUsers(pages, limit).subscribe((response: any)=>{
      console.log(response);
      this.posts = response.results;
    },err=>{
      console.log("Something Went Wrong -> ",err);
    });
  }

  appendPosts(pages, limit){
    this.apiService.getUsers(pages, limit).subscribe((response: any)=>{
      response.results.forEach(post => {
        this.posts.push(post);
      });
    },err=>{
      console.log("Something Went Wrong -> ",err);
    });
  }

  async loadMore(event){
    this.pages++;
    await this.appendPosts(this.pages, this.limit);
    event.target.complete();
  }

}
