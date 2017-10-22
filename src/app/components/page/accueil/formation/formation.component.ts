import { Component, OnInit } from '@angular/core';

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
  mesFormations: Formation[];

  constructor(private formationService: FormationService) { }

  getFormations(): void {
    this.formationService.getFormations().then(formation => this.mesFormations = formation);
  }
  ngOnInit() {
    this.getFormations();
  }
}
