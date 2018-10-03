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
  },
  {
    'type': 'Produits',
    'produits': [
      {
        'libelle': 'Docker',
        'note': 2
      },
      {
        'libelle': 'Kubernetes',
        'note': 1
      },
      {
        'libelle': 'Eureka',
        'note': 2
      },
      {
        'libelle': 'Spring Boot',
        'note': 2
      },
      {
        'libelle': 'Oracle',
        'note': 2
      },
      {
        'libelle': 'Weblogic',
        'note': 3
      },
      {
        'libelle': 'Apache',
        'note': 3
      },
      {
        'libelle': 'Jboss',
        'note': 3
      },
      {
        'libelle': 'MongoDb',
        'note': 1
      },
      {
        'libelle': 'PostgresSQL',
        'note': 2
      },
      {
        'libelle': 'Tomcat',
        'note': 3},
      {
        'libelle': 'Mysql',
        'note': 2
      },
      {
        'libelle': 'Solr',
        'note': 1
      },
      {
        'libelle': 'Redis',
        'note': 1
      },
      {
        'libelle': 'Rancher',
        'note': 2
      },
      {
        'libelle': 'Jenkins',
        'note': 2
      }
    ]
  }
];

    mesOutils() {
      return this.outil;
    }
}
