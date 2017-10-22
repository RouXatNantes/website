import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from '../components/page/accueil/accueil.component';
import { ExperiencesComponent } from '../components/page/experiences/experiences.component';
import { CvComponent } from '../components/page/cv/cv.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  {
    path: 'projets',
    component: ExperiencesComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: '**',
    redirectTo: '/accueil',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AccueilComponent, ExperiencesComponent, CvComponent];

