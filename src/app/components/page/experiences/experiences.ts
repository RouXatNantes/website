import { experiencesCategories } from './experiences.categories';

export class Experiences implements OnInit {
  dateStart: string;
  dateEnd: string;
  employeur: string;
  client: string;
  fonction: string;
  projet: string;
  categorie: experiencesCategories;
  environnement: string;
  enabled: boolean;

  constructor() {}

  ngOnInit() {}

  public setFalse() {
    this.enabled = false;
  }
}
