import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DataMenuService } from './menu/data.menu.service';
import { DataFormationService } from './formation/data.formation.service';
import { DataCompetenceService } from './competence/data.competence.service';
import { DataOutilService } from './outil/data.outil.service';
import { DataExperienceService } from './experience/data.experience.service';

export class DataWebsiteService implements InMemoryDbService {
  private for: DataFormationService = new DataFormationService();
  private menu: DataMenuService = new DataMenuService();
  private comp: DataCompetenceService = new DataCompetenceService();
  private outil: DataOutilService = new DataOutilService();
  private experience: DataExperienceService = new DataExperienceService();

  constructor() {}

  createDb() {
    const menu = this.menu.monMenu();
    const formation = this.for.mesFormations();
    const competence = this.comp.mesCompetences();
    const outil = this.outil.mesOutils();
    const experience = this.experience.mesExperiences();
    return {menu, formation, competence, outil, experience};
  }
}
