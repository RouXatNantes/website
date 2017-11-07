import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule, routedComponents } from '../../route/app-routing.module';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { trigger, state, animate, transition, style } from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*Extention for InMemoryWebApiModule catch http */
import '../../extentions/rxjs-extensions';

/*pour permettre le F5 après le build*/
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/*Data*/
import { DataWebsiteService } from '../../data/data.website.service';

import { AppComponent } from './app.component';
import { EnteteComponent } from '../entete/entete.component';
import { PageComponent } from '../page/page.component';
import { PieddepageComponent } from '../pied-de-page/pied-de-page.component';
import { LiensReseauxComponent } from '../entete/liens-reseaux/liens-reseaux.component';
import { AccueilComponent } from '../page/accueil/accueil.component';
import { ExperiencesComponent } from '../page/experiences/experiences.component';
import { CvComponent } from '../page/cv/cv.component';
import { CompetenceComponent } from '../page/accueil/competence/competence.component';
import { OutilComponent } from '../page/accueil/outil/outil.component';
import { FormationComponent } from '../page/accueil/formation/formation.component';
import { EventService } from '../../services/event/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PageComponent,
    PieddepageComponent,
    LiensReseauxComponent,
    AccueilComponent,
    ExperiencesComponent,
    routedComponents,
    CompetenceComponent,
    OutilComponent,
    FormationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataWebsiteService, { delay: 0, passThruUnknownUrl: true})
  ],
  providers: [
    EventService,
    DataWebsiteService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
