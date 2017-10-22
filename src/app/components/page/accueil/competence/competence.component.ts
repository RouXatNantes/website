import { Component, OnInit } from '@angular/core';

import { competenceProperties } from '../../../../../properties/competence';
import { Competence } from './competence';
import { CompetenceService } from '../../../../services/competence/competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css'],
  providers: [CompetenceService]
})
export class CompetenceComponent implements OnInit {
  public titre = competenceProperties.titre;
  public mesCompetences: Competence[];

  constructor(private competenceService: CompetenceService) { }

  getCompetences(): void {
    this.competenceService.getCompetences().then(competence => this.mesCompetences = competence);
  }
  ngOnInit() {
    this.getCompetences();
  }
}
