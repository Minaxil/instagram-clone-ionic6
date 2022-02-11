import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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

    this.getPosts();
  }

  getPosts(){
    this.apiService.getUsers(this.pages, this.limit).subscribe((response: any)=>{
      console.log(response);
      this.posts = response.results;
    },err=>{
      console.log("Something Went Wrong -> ",err);
    });
  }

}
