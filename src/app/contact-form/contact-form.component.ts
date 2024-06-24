import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNum: new FormControl(''),
    woonplaats: new FormControl(''),
    adress: new FormControl(''),
    Onderwerp: new FormControl(''),
    bericht: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.contactForm.value);
  }
}
