import { Component, OnInit } from '@angular/core';
import { Toy } from '../../shared/models/toy.model';
import { ToyService } from '../../shared/services/toy.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatTableModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  toys: Toy[] = [];

  constructor(private toyService: ToyService) {}

  ngOnInit() {
      this.toyService.getToys().subscribe(data => {
        this.toys = data;
      });
  }
}
