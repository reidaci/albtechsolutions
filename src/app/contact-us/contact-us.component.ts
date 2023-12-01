import { Component, ViewChild } from '@angular/core';
import { Contact } from '../models/contact.model';
import { NgForm } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { TranslateService } from '@ngx-translate/core';
import { doc, setDoc } from "firebase/firestore";
import {FirebaseTSFirestore} from 'firebasets/firebaseTSFirestore/firebaseTSFirestore'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})


export class ContactUsComponent {
  contact: Contact = { name: "", lastname: "", email: "", subject: "", comments: "" };
@ViewChild('contactForm') contactForm:NgForm | undefined
private firestore!: FirebaseTSFirestore
  constructor(private translate: TranslateService) {


   }



 switchLanguage(language: string) {
    this.translate.use(language)
  }
  addContactDocumment(form: NgForm) {
    if (form.valid) {
      console.log(form.value);


    this.firestore = new FirebaseTSFirestore()
    this.firestore.create({
      path: ["EMAILS"],
      data: form.value,


      onComplete: (docId) => {
console.log('Created document on firestore' + docId);
form.resetForm();
      },
      onFail: (err) => {
        console.log('Error sending data to firestore');
      }
    })
  }
}
}
