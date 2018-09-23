import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


import { contact } from '../../../properties/contact';
import { Mail } from '../mail/mail';
import { MailService } from '../../services/mail/mail.service';
import { GlobalValidator } from '../../forms/validators/global-validator';

@Component({
  selector: 'app-pieddepage',
  templateUrl: './pied-de-page.component.html',
  styleUrls: ['./pied-de-page.component.css'],
  providers: [MailService],
})

export class PieddepageComponent implements OnInit {
  public myGithub = contact.myGithub;
  public myGithubAddress = contact.myGithubAddress;
  public contactMe = contact.contactMe;
  public numero = contact.numero;
  public rue = contact.rue;
  public codePostal = contact.codePostal;
  public ville = contact.ville;
  public telephone = contact.telephone;
  public hobbies = contact.hobbies;
  public msgMailOk = contact.msgMailOk;

  contactFormulaire: FormGroup;
  nom: FormControl;
  email: FormControl;
  message: FormControl;

  public formulaireContact = false;
  public retourMail = new Mail();

  constructor(private mailService: MailService, private builder: FormBuilder) {
    this.nom = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.compose([Validators.required, GlobalValidator.mailFormat]));
    this.message = new FormControl('', Validators.required);

    this.contactFormulaire = builder.group({
      nom: this.nom,
      email: this.email,
      message: this.message
    });
  }

  ngOnInit() {}

  getLigne1() {
    return this.numero + ' ' + this.rue;
  }
  getLigne2() {
    return this.codePostal + ' ' + this.ville;
  }
  recuperationInfoMail(mail: Mail) {
    this.retourMail = mail;
    if (this.retourMail.rc === 0) {
      this.contactFormulaire.reset();
    }
  }
  closePopup() {
    this.formulaireContact = false;
    this.retourMail = new Mail();
  }
  onSubmit() {
    if (this.contactFormulaire.valid) {
      this.mailService.sendMail(this.contactFormulaire.value.nom, this.contactFormulaire.value.email, this.contactFormulaire.value.message)
      .subscribe(response => this.recuperationInfoMail(response));
    }
  }
}
