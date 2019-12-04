import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Platform, ModalController } from '@ionic/angular';
import { Map, tileLayer, marker, circle } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AddFavoritePage } from '../add-favorite/add-favorite.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit, OnInit {

  map: Map;

  constructor(private modalController: ModalController,
    private plt: Platform,
    private geolocation: Geolocation) { }

  ngOnInit(): void {
    this.plt.ready().then(() => {
      this.initMap();
    });

    this.geolocation.watchPosition().subscribe((data) => {
      const { latitude, longitude } = data.coords;
      this.map.setView({ lat: latitude, lng: longitude });
    });
  }

  ngAfterViewInit() {
    // this.plt.ready().then(() => {
    //   this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
    //     .subscribe(restaurants => this.initMap(restaurants));
    // });
  }

  initMap() {
    this.map = new Map('map');

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('locationfound', this.onLocationFound);
    this.map.on('locationerror', this.onLocationError);

    this.map.locate({ setView: true, maxZoom: 16 });

    this.map.on('click', e => {
      this.showModalAddFav((data) => {
        console.log(data);
                
        const m = marker(e.latlng).addTo(this.map);
        m.bindPopup(data);
      });
    });

    // console.log(this.location.accuracy)
    // circle({ lat, lng }, this.location.accuracy).addTo(map);

    // restaurants.forEach((restaurant) => {
    //   marker([restaurant.position.lat, restaurant.position.lgn], { icon: customMarkerIcon })
    //     .bindPopup(`<b>${restaurant.title}</b>`, { autoClose: false })
    //     .on('click', () => this.router.navigateByUrl('/restaurant'))
    //     .addTo(map).openPopup();
    // });
  }

  async showModalAddFav(cb) {
    const modal = await this.modalController.create({
      component: AddFavoritePage
    });
    modal.onDidDismiss().then(cb);
    return await modal.present();
  }

  onLocationFound = ({ latlng, accuracy }) => {
    marker(latlng).addTo(this.map).bindPopup("You are within " + accuracy + " meters from this point").openPopup();
    circle(latlng, accuracy).addTo(this.map);
  }

  onLocationError = e => {
    alert(e.message);
  }

}
