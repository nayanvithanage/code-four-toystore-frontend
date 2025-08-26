import { Component } from '@angular/core';
import { Toy } from '../../../shared/models/toy.model';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-add-toy-dialog',
  imports: [MatFormField, FormsModule, MatInput],
  templateUrl: './add-toy-dialog.html',
  styleUrl: './add-toy-dialog.css'
})
export class AddToyDialogComponent {
  toy: Partial<Toy> = {name: '', type: '', price: 0};

  constructor(private dialogRef: MatDialogRef<AddToyDialogComponent>) {}

  submit() {
    this.dialogRef.close(this.toy);
  }

  cancel() {
    this.dialogRef.close();
  }
}
