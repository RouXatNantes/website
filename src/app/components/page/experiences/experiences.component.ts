import { Component, HostListener, Inject, Injectable, OnInit, Input } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

import { Observable } from 'rxjs';

import { experiencesProperties } from '../../../../properties/experiences';
import { Experiences } from './experiences';
import { ExperienceService } from '../../../services/experience/experience.service';
import { EventService } from '../../../services/event/event.service';

@Component({
  selector: 'app-experience',
  animations: [
  trigger('visibilityChanged', [
    state('display', style({ opacity: 1 })),
    state('hidden', style({ opacity: 0 })),
    transition('display => hidden', animate('.25s')),
    transition('hidden => display', animate('0.75s'))
    ])
  ],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ExperienceService]
})
export class ExperiencesComponent implements OnInit {
  @Input() timelineIsVisible = 'hidden';
  titre = experiencesProperties.titre;
  mesExperiences: Experiences[];
  mesExperiences_obs: Observable<Experiences[]>;
  private expand = true;
  public expandLabel: string;
  public today = new Date();
  public dateFormat = 'MM/yyyy';
  public dateEnCoursStart = ('0' + (this.today.getMonth() + 1)).slice(-2) + '/' + this.today.getFullYear();
  public dateEnCoursEnd = ('0' + (this.today.getMonth() + 1)).slice(-2) + '/' + this.today.getFullYear();
  public numberEnCours = 1;
  public menuIsMini = false;
  public pourcentageTimeline = 0;

  constructor(private experienceService: ExperienceService, private _eventService: EventService ) {
    this.expandLabel = experiencesProperties.getLabel(this.expand);
    this._eventService.listen().subscribe((isMini: boolean) => {
      this.menuIsMini = isMini;
    });
  }

  getExperiences(): void {
    this.experienceService.getExperiences().subscribe(exp => {
        this.mesExperiences = exp;
     });
  }

  getLastStartDate() {
    return this.dateEnCoursStart;
  }

  getLastEndDate() {
    return this.dateEnCoursEnd;
  }

  getNumberOfExperiences() {
    return this.mesExperiences ? this.mesExperiences.length : 0;
  }

  expandAll(): void {
    this.mesExperiences.forEach((exp) => {
      exp.enabled = this.expand;
    });
    this.expand = !this.expand;
    this.expandLabel = experiencesProperties.getLabel(this.expand);
  }

  public timelineIsHidden(): boolean {
    return (this.timelineIsVisible === 'hidden');
  }
  getpourcentageTimeline(): string {
    return this.pourcentageTimeline + '%';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let numberEnCours = '0';
    let tooBottom = false;
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const xps = document.getElementsByClassName('uneExperience');
    const timeline = document.getElementById('timeline');

    Array.prototype.forEach.call(xps, function(xp) {
      tooBottom = ((timeline.offsetTop + timeline.offsetHeight) < (xp.offsetTop + xp.offsetHeight - scroll));
      if (xp.offsetTop - scroll < 500) {
        numberEnCours = xp.firstChild.innerText;
      }
    });
    this.pourcentageTimeline = ( +numberEnCours / ( this.getNumberOfExperiences() - 1) ) * 100;
    this.numberEnCours = +numberEnCours + 1 ;
    if (this.getNumberOfExperiences() >= this.numberEnCours) {
      this.dateEnCoursStart = this.mesExperiences[this.numberEnCours - 1].dateStart;
      this.dateEnCoursEnd = this.mesExperiences[this.numberEnCours - 1].dateEnd;
    }
    this.timelineIsVisible = (this.menuIsMini && tooBottom) ? 'display' : 'hidden';
  }

  ngOnInit() {
    this.getExperiences();
  }
}
