import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Perfil } from '../models/perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  imagem = 'https://www.voanews.com/themes/custom/voa/images/Author__Placeholder.png';
  usuario: Perfil = {
    nome: '',
    sobrenome: ''
  };

  constructor(private photoService: PhotoService) {
    
  }

  ngOnInit(): void {
  }

  tirarFoto() {
    this.photoService.tirarFoto().then(res => this.imagem = res);
  }
}
