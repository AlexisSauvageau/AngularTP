import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Activite} from '../services/activite';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  btnText: string = "Envoyer";
  isFormActive: boolean = false;

  activiteService = inject(Activite);

  rendreFormActif() {
    this.isFormActive = !this.isFormActive;
  }

  ngOnInit() {
    this.activiteService.nbItems = this.activiteService.objectifs.length;
  }
}
