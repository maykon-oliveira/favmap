import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFavoritePageRoutingModule } from './add-favorite-routing.module';

import { AddFavoritePage } from './add-favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFavoritePageRoutingModule
  ],
  declarations: [AddFavoritePage],
  entryComponents: []
})
export class AddFavoritePageModule {}
