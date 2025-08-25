import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ManageComponent } from './features/manage/manage';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent},
    { path: 'manage', component: ManageComponent}
];
