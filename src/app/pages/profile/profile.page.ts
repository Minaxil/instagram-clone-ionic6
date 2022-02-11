import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
    }
    ,
    {
      url : "https://picsum.photos/100"
    }
    ,
    {
      url : "https://picsum.photos/100"
    }
    ,
    {
      url : "https://picsum.photos/100"
    }
    ,
    {
      url : "https://picsum.photos/100"
    }
    ,
    {
      url : "https://picsum.photos/100"
    }
    ,
    {
      url : "https://picsum.photos/100"
    }
  ]

  ipadOrNot = false;

  constructor(private platform : Platform) { }

  ngOnInit() {
    this.ipadOrNot = this.platform.is("ipad");

    if(this.ipadOrNot){
      this.slideOpts = {
        initialSlide: 0,
        speed: 400,
        slidesPerView : 7,
        spaceBetween : 10
      }
    }
  }

}
