import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Platform } from '@ionic/angular';
import { Map, tileLayer } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit, OnInit {

  location = { latitude: -5.9511452, longitude: -35.2697794 };

  constructor(private http: HttpClient, private plt: Platform, private geolocation: Geolocation) { }

  ngOnInit(): void {
    this.geolocation.getCurrentPosition().then(resp => {
      this.location = resp.coords;

      this.plt.ready().then(() => {
        this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
          .subscribe(restaurants => this.initMap(restaurants));
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    // });
  }

  ngAfterViewInit() {
    // this.plt.ready().then(() => {
    //   this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
    //     .subscribe(restaurants => this.initMap(restaurants));
    // });
  }

  initMap(restaurants, lat = this.location.latitude, lng = this.location.longitude) {
    const map = new Map('map').setView([lat, lng], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // const customMarkerIcon = icon({
    //   iconUrl: 'assets/images/custom-marker-icon.png',
    //   iconSize: [64, 64],
    //   popupAnchor: [0, -20]
    // });

    // restaurants.forEach((restaurant) => {
    //   marker([restaurant.position.lat, restaurant.position.lgn], { icon: customMarkerIcon })
    //     .bindPopup(`<b>${restaurant.title}</b>`, { autoClose: false })
    //     .on('click', () => this.router.navigateByUrl('/restaurant'))
    //     .addTo(map).openPopup();
    // });
  }

}
