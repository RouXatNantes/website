import { Component, OnInit } from '@angular/core';

import { experiencesProperties } from '../../../../properties/experiences';
import { Experiences } from './experiences';
import { ExperienceService } from '../../../services/experience/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ExperienceService]
})
export class ExperiencesComponent implements OnInit {
  titre = experiencesProperties.titre;
  mesExperiences: Experiences[];
  private expand = true;
  public expandLabel: string;
  constructor(private experienceService: ExperienceService) {
    this.expandLabel = experiencesProperties.getLabel(this.expand);
  }

  getExperiences(): void {
    this.experienceService.getExperiences().then(experiences => this.mesExperiences = experiences);
  }
  expandAll(): void {
    this.mesExperiences.forEach((exp) => {
      exp.enabled = this.expand;
    });
    this.expand = !this.expand;
    this.expandLabel = experiencesProperties.getLabel(this.expand);
  }
  ngOnInit() {
    this.getExperiences();
  }
}
