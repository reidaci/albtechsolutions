import { Component } from '@angular/core';
import { Contact } from '../models/contact.model';
import { NgForm } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact: Contact = { name: "", lastname: "", email: "", subject: "", comments: "" };

  constructor(private translate: TranslateService) { }



 switchLanguage(language: string) {
    this.translate.use(language)
  }
  addContactDocumment(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      form.resetForm();
    }
  }
}
