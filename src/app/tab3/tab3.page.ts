import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit {

  constructor(public http: HttpClient, public plt: Platform, public router: Router) { }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
        .subscribe(restaurants => this.initMap(restaurants));
    });
  }

  initMap(restaurants) {
    const map = new Map('map').setView([-5.9511452, -35.2697794], 13);

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
