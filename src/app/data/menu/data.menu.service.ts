export class DataMenuService {
  private menu = [
    {
      'id': 1,
      'name': 'Accueil',
      'image': 'Maison',
      'href': 'accueil'
    },
    {
      'id': 2,
      'name': 'Projets',
      'image': 'Projet',
      'href': 'projets'
    },
    {
      'id': 3,
      'name': 'CV',
      'image': 'CV',
      'href': 'cv'
    }
  ];

    monMenu() {
      return this.menu;
    };
}
