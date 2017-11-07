import { Component, OnInit } from '@angular/core';
import { ExperiencesCategories } from './experiences.categories';

export class Experiences implements OnInit {
  dateStart: string;
  dateEnd: string;
  employeur: string;
  client: string;
  fonction: string;
  website: string;
  projet: string;
  categorie: ExperiencesCategories;
  environnement: string;
  enabled: boolean;

  constructor() {}

  ngOnInit() {}

  public setFalse() {
    this.enabled = false;
  }
}
