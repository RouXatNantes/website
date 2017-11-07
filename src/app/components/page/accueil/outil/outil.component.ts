import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { outilProperties } from '../../../../../properties/outil';
import { OutilGroupe } from './outilGroupe';
import { OutilService } from '../../../../services/outil/outil.service';

@Component({
  selector: 'app-outil',
  templateUrl: './outil.component.html',
  styleUrls: ['./outil.component.css'],
  providers: [OutilService]
})
export class OutilComponent implements OnInit {
  titre = outilProperties.titre;
  mesOutils: Observable<OutilGroupe[]>;

  constructor(private outilService: OutilService) { }

  getOutils(): void {
    this.mesOutils = this.outilService.getOutils();
  }
  ngOnInit() {
    this.getOutils();
  }
}
