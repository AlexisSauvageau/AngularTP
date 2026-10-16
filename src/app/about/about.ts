import {Component, inject} from '@angular/core';
import {Activite} from '../services/activite';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  activiteService = inject(Activite);
}
