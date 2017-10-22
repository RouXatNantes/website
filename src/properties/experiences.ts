require('es6-shim');

export const experiencesProperties = {
  titre: 'Expériences professionnelles',
  developpementExpLabel: Map,

  getLabel(valeurLabel: boolean): string {
    this.developpementExpLabel = new Map();
    this.developpementExpLabel.set(true, 'Développer toutes les expériences');
    this.developpementExpLabel.set(false, 'Réduire toutes les expériences');
    return this.developpementExpLabel.get(valeurLabel);
  }
};

