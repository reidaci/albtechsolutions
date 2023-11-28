import { Component } from '@angular/core';
import { Contact } from '../models/contact.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact: Contact = { name: "", lastname: "", email: "", subject: "", comments: "" };

  constructor() { }

  ngOnInit(): void {
  }

  addContactDocumment(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      form.resetForm();
    }
  }

}
