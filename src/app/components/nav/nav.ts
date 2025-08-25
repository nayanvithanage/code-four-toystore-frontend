import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatToolbar, RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class NavComponent {

}
