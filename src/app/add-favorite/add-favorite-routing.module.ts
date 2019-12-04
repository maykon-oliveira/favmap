import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFavoritePage } from './add-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: AddFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFavoritePageRoutingModule {}
