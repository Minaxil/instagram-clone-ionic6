import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  isClick = false;
  tabPage = 'home'
  constructor() {}

  clickHeart(){
    this.isClick = !this.isClick;
  }

  tabChange(event){
    console.log(event.tab)
    this.tabPage = event.tab;
  }
}
