import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Activite} from '../services/activite';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  id: number;
  title: string;

  private router = inject(Router);

  activiteService = inject(Activite);

  supprimeElem() {
    this.activiteService.removeItem(this.id);
    this.router.navigate(['/']);
  }

  modifElem() {
    this.activiteService.modifItem(this.id, this.title);
    this.router.navigate(['/']);
  }

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.title = this.activiteService.objectifs[this.id];
  }
}
