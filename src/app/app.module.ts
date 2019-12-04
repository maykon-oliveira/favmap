import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFavoritePageModule } from './add-favorite/add-favorite.module';
import { AddFavoritePage } from './add-favorite/add-favorite.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AddFavoritePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AddFavoritePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
