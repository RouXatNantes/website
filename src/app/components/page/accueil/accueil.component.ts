import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { presentation } from '../../../../properties/presentation';

@Component({
  moduleId: module.id,
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  titre = presentation.titre;
  experience_label = presentation.experience_label;
  texte = presentation.texte;

  constructor(private router: Router) { }

  getExperience(): string {
    return Math.floor(( new Date().valueOf() - new Date('2008-10-01').valueOf() ) / (60 * 60 * 24 * 365.25 * 1000)) + ' ' + this.experience_label;
  }
  ngOnInit() {
  }

}
