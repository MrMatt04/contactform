import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resultaten',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './resultaten.component.html',
  styleUrl: './resultaten.component.css',
})
export class ResultatenComponent {
  //form handeling
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNum: new FormControl(''),
    postcode: new FormControl(''),
    woonplaats: new FormControl(''),
    adress: new FormControl(''),
    Onderwerp: new FormControl(''),
    bericht: new FormControl(''),
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('form submitted:', this.contactForm.value);
    } else {
      console.log('form not submitted:', this.contactForm.value);
    }
  }

  private value = signal('');

  onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  errorMessage = signal('');

  constructor() {
    merge(
      this.contactForm.controls.email.statusChanges,
      this.contactForm.controls.email.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.contactForm.controls.email.hasError('required')) {
      this.errorMessage.set('Email is verplicht 🥱');
    } else if (this.contactForm.controls.email.hasError('email')) {
      this.errorMessage.set('Email is ongeldig 😠');
    } else {
      this.errorMessage.set('');
    }
  }
  // form handeling
}
