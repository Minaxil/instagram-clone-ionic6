import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { StoriesComponent } from 'src/app/components/stories/stories.component';
import { PostCardComponent } from 'src/app/components/post-card/post-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,StoriesComponent,PostCardComponent],
  entryComponents: [StoriesComponent,
    PostCardComponent
  ],
})
export class HomePageModule {}
