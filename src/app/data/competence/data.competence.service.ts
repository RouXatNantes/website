export class DataCompetenceService {

  private competence = [
    {
      'id': 1,
      'libelle': 'Pilotage opérationnel: 4 personnes'
    },
    {
      'id': 2,
      'libelle': 'Automatisation des processus: étude, conception, réalisation, test, intégration continue, DevOps'
    },
    {
      'id': 3,
      'libelle': 'Rédaction de normes et de processus'
    },
    {
      'id': 4,
      'libelle': 'Élaboration et suivi de l\'exécution du planning et des charges'
    },
    {
      'id': 5,
      'libelle': 'Suivi commercial : rédaction de devis'
    },
    {
      'id': 6,
      'libelle': 'Études techniques : migration Oracle vers Postgres, choix d\'architectures'
    },
    {
      'id': 7,
      'libelle': 'Administrateur système et base de données'
    },
    {
      'id': 8,
      'libelle': 'Exploitation : supervision, gestion de la production'
    },
    {
      'id': 9,
      'libelle': 'Intégrateur : installation, rédaction de document d\'installation'
    }];

  mesCompetences() {
    return this.competence;
  };

}
