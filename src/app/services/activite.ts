import {Service} from '@angular/core';

@Service()
export class Activite {
  objectifs: string[] = [];
  objectifText: string = "";
  nbItems: number = 4;

  ajoutItem() {
    this.objectifs.push(this.objectifText);
    this.nbItems++;
  }

  modifItem(index: number, value: string) {
    this.objectifs[index] = value;
  }

  removeItem(index: number) {
    this.objectifs.splice(index, 1);
    this.nbItems--;
  }
}
