import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-resultaten',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './resultaten.component.html',
  styleUrl: './resultaten.component.css',
})
export class ResultatenComponent {}
