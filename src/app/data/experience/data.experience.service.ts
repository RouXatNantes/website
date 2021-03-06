export class DataExperienceService {

  private experience = [
  {
    'dateStart': '05/2017',
    'dateEnd': 'ce jour',
    'employeur': 'Indépendant',
    'client': 'SV.SI, SNCF Voyages.SI',
    'fonction': 'Coach DevOps',
    'projet': 'SIS, PMT, CAR, PDO (Division Déléguée Production Ferroviaire)',
    'categorie': [
      {
        'libelle': 'DevOps',
        'detail': [
          'Coaching vers les chefs de projet',
          'Définition des besoins et pilotage des actions'
        ]
      },
      {
        'libelle': 'Suivi des objectifs',
        'detail': [
          'Conciliateur entre équipes de développement et d’exploitation',
          'Métriques techniques et applicatives et consolidation dans des dashboards de supervision',
          'Déploiement sans interruption de service',
          'Automatisation des déploiements',
          'Automatisation des tests dans le cadre du déploiement continu'
         ]
      },
      {
        'libelle': 'Intégration continue',
        'detail': [
          'Adaptation du workflow au sein de l\'usine logiciel',
          'Mise en place d\'un déploiement continu toutes les nuits',
          'Mise en place de test de déploiement continu'
        ]
      },
      {
        'libelle': 'Expertise technique',
        'detail': [
          'Support technique aux différentes équipes',
          'Suivi de la performance des plateformes et mise en place d’indicateurs',
          'Suivi du run de la chaine applicative'
        ]
      },
      {
        'libelle': 'Toolbox',
        'detail': [
          `Conception (recueil du besoin, architecture, développement) d\'une solution pour déployer facilement
de l\'outillage de monitoring dans le cadre du programme FIRST`,
          'Leader technique auprès de l\'équipe de développement (2 développeurs)',
          `« Push to prod ». Mise en place d’une solution pour déployer automatiquement
en production une fois le code terminé et validé`,
          'Choix des plugins et des solutions techniques pour développer et déployer la Toolbox (choix des processus associés)',
          'Migration de l\'application dans Amazon EKS'
        ]
      }
    ],
    'environnement': [
      {
        'label': 'Contexte',
        'value': `Agile, DevOps`
      },
      {
        'label': 'Build/Déploiement',
        'value': `Ansible, Ansible Tower, Jenkins, Sonar, Nexus`
      },
      {
        'label': 'Développement',
        'value': `Smashing, Bootstrap, Jquery, Php, Redis, Dynamodb`
      },
      {
        'label': 'Intégration',
        'value': `Spring boot (Eureka, Spring config, Spring admin), Redis, Apache, MongoDb`
      },
      {
        'label': 'Monitoring',
        'value': `Elasticsearch (ELK), Filebeat, Metricbeat, Grafana, Hawtio`
      },
      {
        'label': 'Exploitation',
        'value': `Docker, Rancher, Kubernetes`
      }
    ]
  },
  {
    'dateStart': '11/2015',
    'dateEnd': '05/2017',
    'employeur': 'Atos',
    'client': 'MINISTÈRE DES AFFAIRES ÉTRANGÈRES',
    'fonction': 'Responsable équipe d\'intégration / exploitation',
    'projet': 'Projet agile France visas - refonte du site de demande de visas français',
    'website': 'https://france-visas.gouv.fr',
    'categorie': [
      {
        'libelle': 'Gestion d\'une équipe d\'intégration/exploitation',
        'detail': [
          'Planning, animation, reporting vers managers'
        ]
      },
      {
        'libelle': 'Intégrations',
        'detail': [
          'Support technique auprès de l\'équipe de développement',
          'Préparation des serveurs et installation des itérations'
         ]
      },
      {
        'libelle': 'Exploitation',
        'detail': [
          'Mise en place de procédures de gestion de production',
          'Installation et supervision des plateformes clients (N2/N3)'
        ]
      },
      {
        'libelle': 'Administration de plateformes',
        'detail': [
          'Gestion des serveurs (200) du projet',
          'Mise en place d\'une usine logicielle et d\'un processus de déploiement automatisé',
          'Support technique pour l\'équipe et coordination avec l\'équipe d\'infrastructure Atos'
        ]
      },
      {
        'libelle': 'Etudes',
        'detail': [
          'Etudes techniques sur les différents produits du projet'
        ]
      },
      {
        'libelle': 'Industrialisation',
        'detail': [
          `Réalisation d\'automates Ansible pour déployer de manière industrielle les
 versions depuis les plateformes de développement jusqu\'à la production`,
          'Préparation des serveurs et installation des itérations'
        ]
      }
    ],
    'environnement': [
      {
        'label': 'Pilotage',
        'value': `Agile, DevOps`
      },
      {
        'label': 'Build/Déploiement',
        'value': `Ansible, Puppet, Jenkins, Sonar, Nexus, Rainloop`
      },
      {
        'label': 'Intégration',
        'value': `Debian, Haproxy, Apache, Liferay, Solr, Servicemix, Tomcat, Bonita, Postgres, Bind, Exim/Dovecot, Ossec`
      },
      {
        'label': 'Monitoring',
        'value': `Zabbix, Graylog`
      },
      {
        'label': 'Exploitation',
        'value': `glpi`
      }
    ]
  },
  {
    'dateStart': '09/2015',
    'dateEnd': '11/2015',
    'employeur': 'Atos',
    'client': 'VEOLIA',
    'fonction': 'Responsable adjoint et développeur',
    'projet': 'Centre de service Veolia eau',
    'categorie': [
      {
        'libelle': 'Développeur',
        'detail': [
          'Participation à la mise en place de l\'usine logiciel et des déploiements automatisés',
          'Développements d\'applications intranet'
        ]
      }
    ],
    'environnement': [
      {
        'label': 'Développement',
        'value': `Centos, Jenkins, Clearcase, Php, Mysql, Solr`
      }
    ]
  },
  {
    'dateStart': '02/2009',
    'dateEnd': '08/2015',
    'employeur': 'Effitic puis Atos',
    'client': 'SV.SI, SNCF VOYAGES.SI',
    'fonction': 'Responsable technique et opérationnel - Equipe d\'intégration',
    'projet': 'Centre de Service Production d\'Intégration',
    'categorie': [
      {
        'libelle': 'Gestion d\'équipe',
        'detail': [
          'Planning, animation, reporting vers managers'
        ]
      },
      {
        'libelle': 'Relation client',
        'detail': [
           `Traitement des demandes, incidents, comité projet, réunions techniques,
 point de contact avec le responsable technique SNCF et TMA (AtoS, VSCT, SV.SI et Sopra)`,
          'Rédaction des devis',
          'Pilotage des plateformes de recette'
        ]
      },
      {
        'libelle': 'Intégration',
        'detail': [
          'Support technique auprçs de l\'équipe et du client',
          'Intégration di une trentaine d\'applications'
        ]
      },
      {
        'libelle': 'Administration de plateformes',
        'detail': [
          'Installation de produits : Weblogic, Oracle, Postgres, Jboss, Apache...',
          'Migration de bases de données Oracle',
          'Choix d\'architectures des serveurs d intégration et maintenance'
        ]
      },
      {
        'libelle': 'Etudes',
        'detail': [
          'Expertises techniques  des développements de la TMA CSP SNCF (migrations, interventions à valeurs ajoutée)',
          'Contribution à la mise en place de solutions \'haute disponibilité\''
        ]
      },
      {
        'libelle': 'Assistance à Maitrise d\'œuvre',
        'detail': [
           `Planification et contrôle des versions. Relation MOA/CDS développement.
 Analyse de tirs de performance. Référencement et modification de flux
 (environnements de recette/pré-prod/prod). Gestion d\'incident de production`
         ]
      },
      {
        'libelle': 'Industrialisation / Développement',
        'detail': [
          'Suivi des activités et automatisation des tâches récurrentes'
        ]
      }
    ],
    'environnement': [
      {
        'label': 'Intégration',
        'value': `Solaris, Weblogic, Jboss AS, Jboss EWP, ICAN, Oracle, Apache, Cognos, RTC,
 HP-ALM, Maven, PostgreSQL, IIS, MqSeries, MongoDb, Docker`
      },
      {
        'label': 'Développement',
        'value': `Php, Mysql, shell`
      },
      {
        'label': 'Exploitation',
        'value': `ARS`
      }
    ]
  },
  {
    'dateStart': '01/2014',
    'dateEnd': '07/2014',
    'employeur': 'Atos',
    'client': 'INDUSTRIALISATION SI FRANCE ATOS',
    'fonction': 'Développeur',
    'projet': 'Projet Industrialisation -  Gestion des exigences',
    'categorie': [
      {
        'libelle': 'Developpeur',
        'detail': [
          'Réalisation de l\'outil d\'import des Spécifications Fonctionnelles (Word) dans l\'outil de gestion des exigences HP-ALM'
        ]
      }
    ],
    'environnement': [
      {
        'label': 'Développement',
        'value': 'Word, VBA, HP ALM 11'
      }
    ]
  },
  {
    'dateStart': '10/2008',
    'dateEnd': '01/2009',
    'employeur': 'Effitic',
    'client': 'INSEE',
    'fonction': 'Développeur',
    'projet': 'Projet Résane',
    'categorie': [
      {
        'libelle': 'Developpeur',
        'detail': [
          'Conception et réalisation d\'écrans pour une application J2EE',
          'Réalisation d\'une solution de génération de PDF \'à la volée\''
        ]
      }
    ],
    'environnement': [
      {
        'label': 'Développement',
        'value': 'HTML, CSS, JavaScript, PHP, Ajax, Java, Struts'
      }
    ]
  },
  {
    'dateStart': '02/2008',
    'dateEnd': '08/2008',
    'employeur': 'Université Ulster',
    'client': 'INTELLIGENT SYSTEMS RESEARCH CENTER (Derry)',
    'fonction': 'Stagiaire',
    'projet': `Conception et réalisation d\'un logiciel Client/Server permettant
 d\'exécuter sur ce dernier des simulations de réseaux de neurones.`,
    'categorie': [
      {
        'libelle': 'Developpeur',
       'detail': [
         'Choix d\'architecture du logiciel (C++, tcp-ip, librairie wxWidget)',
         'Développement d\'un logiciel multi-plateforme en C++',
         'Mise en place d\'une documentation de conception et de maintenance'
       ]
     }
   ],
    'environnement': [
      {
        'label': 'Langue',
        'value': 'Anglais'
      },
      {
        'label': 'Développement',
        'value': 'C++, wxWidgets, XML, cryptage, tcp-ip, base de données'
      }
    ]
  }
];

    mesExperiences() {
      return this.experience;
    }
}
