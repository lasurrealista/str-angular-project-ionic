import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FilterPipe } from '../pipe/filter.pipe';
import { MatchPipe } from '../pipe/match.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  exports: [
    ProfileCardComponent,
  ],
  declarations: [Tab1Page, ProfileCardComponent, HomeComponent, FilterPipe, MatchPipe],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Tab1PageModule {}
