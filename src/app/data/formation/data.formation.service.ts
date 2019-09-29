export class DataFormationService {

  private formation = [
  {
    'id': 1,
    'annee': 2008,
    'intitule': 'Formation initiale',
    'description': 'Ingénieur en informatique à Polytech\'Nantes (44)',
    'complement': 'option Management des Organisations et des Risques'
  },
  {
    'id': 2,
    'annee': 2013,
    'intitule': 'Formation continue',
    'description': 'Formation Oracle 11G :  5 jours',
    'complement': '(Société Atos)'
  },
  {
    'id': 3,
    'annee': 2016,
    'intitule': 'Formation continue',
    'description': 'Formation Project Leader :  13 jours',
    'complement': '(Société Atos)'
  },
  {
    'id': 4,
    'annee': 2019,
    'intitule': 'Formation continue',
    'description': 'Formation AWS:  3 jours',
    'complement': ''
  }
];

  mesFormations() {
    return this.formation;
  }
}
