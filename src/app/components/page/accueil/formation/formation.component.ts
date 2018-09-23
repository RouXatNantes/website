import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { formationProperties } from '../../../../../properties/formation';
import { Formation } from './formation';
import { FormationService } from '../../../../services/formation/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  providers: [FormationService]
})
export class FormationComponent implements OnInit {
  titre = formationProperties.titre;
  mesFormations: Observable<Formation[]>;

  constructor(private formationService: FormationService) { }

  getFormations(): void {
    this.mesFormations = this.formationService.getFormations();
  }
  ngOnInit() {
    this.getFormations();
  }
}
