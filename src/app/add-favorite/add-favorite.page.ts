import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.page.html',
  styleUrls: ['./add-favorite.page.scss'],
})
export class AddFavoritePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {

  }

  salvar() {
    this.modalController.dismiss();
  }

}
