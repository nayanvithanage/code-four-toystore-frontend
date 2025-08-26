import { Component } from '@angular/core';
import { Toy } from '../../shared/models/toy.model';
import { ToyService } from '../../shared/services/toy.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddToyDialogComponent } from './add-toy-dialog/add-toy-dialog';

@Component({
  selector: 'app-manage',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule, FormsModule, MatFormField, MatInputModule],
  templateUrl: './manage.html',
  styleUrl: './manage.css'
})
export class ManageComponent {
  toys: Toy[] = [];
  newToy: Toy = { id: 0, name: '', type: '', price: 0};
  editingToy: Toy | null = null;

  constructor(private toyService: ToyService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadToys();
  }

  loadToys(){
    this.toyService.getToys().subscribe(data => this.toys = data);
  }

  addToy(toy: Toy){
    const { id, ...toyToAdd } = toy;
    this.toyService.addToy(toyToAdd).subscribe(() => this.loadToys());
    this.newToy = { id: 0, name: '', type: '', price: 0};
  }

  editToy(toy: Toy){
    this.toyService.updateToy(toy).subscribe(() => {
      this.loadToys(); //refresh list after update
    });
  }

  startEdit(toy: Toy){
    this.editingToy = { ...toy }; //make a copy to edit
  }

  saveEdit() {
    if(this.editingToy){
      this.toyService.updateToy(this.editingToy).subscribe(() => {
        this.loadToys();
        this.editingToy = null; // Exit edit mode
      })
    }
  }

  cancelEdit() {
    this.editingToy = null;
  }

  deleteToy(id: number){
    this.toyService.deleteToy(id).subscribe(() => {
      this.loadToys();
    })
  }

  openAddToyDialog(){
    const dialogRef = this.dialog.open(AddToyDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.toyService.addToy(result).subscribe(() => this.loadToys());
      }
    });
  }

}
