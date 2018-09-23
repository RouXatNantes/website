export class DataOutilService {
  private outil = [
  {
    'type': 'Système d\'exploitation',
    'produits': [
      {
        'libelle': 'Windows',
        'note': 2
      },
      {
        'libelle': 'Solaris',
        'note': 3
      },
      {
        'libelle': 'Debian/Ubuntu',
        'note': 3
      }
    ]
  },
  {
    'type': 'Modelisation',
    'produits': [
      {
        'libelle': 'UML',
        'note': 2
      }
    ]
  },
  {
    'type': 'Langages',
    'produits': [
      {
        'libelle': 'HTML / CSS',
        'note': 2
      },
      {
        'libelle': 'php / Mysql',
        'note': 3
      },
      {
        'libelle': 'SQL',
        'note': 3
      },
      {
        'libelle': 'Java',
        'note': 1
      },
      {
        'libelle': 'Ansible',
        'note': 3
      },
      {
        'libelle': 'VBA',
        'note': 2
      },
      {
        'libelle': 'Angular',
        'note': 1
      }
   ]
  },
  {
    'type': 'Produits',
    'produits': [
      {
        'libelle': 'Oracle (9, 10, 11)',
        'note': 2
      },
      {
        'libelle': 'Weblogic (8, 9, 10)',
        'note': 3
      },
      {
        'libelle': 'Apache (2.0, 2.2)',
        'note': 3
      },
      {
        'libelle': 'Jboss (AS 7, EWP 5.1)',
        'note': 3
      },
      {
        'libelle': 'MongoDb (2.6)',
        'note': 1
      },
      {
        'libelle': 'PostgresSQL (9.5)',
        'note': 2
      },
      {
        'libelle': 'Tomcat (7, 8)',
        'note': 3},
      {
        'libelle': 'Mysql (5.6)',
        'note': 2
      },
      {
        'libelle': 'Docker',
        'note': 1
      },
      {
        'libelle': 'Jenkins',
        'note': 2
      }
    ]
  },
  {
    'type': 'Bureautique',
    'produits': [
      {
        'libelle': 'Eclipse',
        'note': 2
      },
      {
        'libelle': 'MS Project',
        'note': 1
      }
    ]
  }
];

    mesOutils() {
      return this.outil;
    }
}
