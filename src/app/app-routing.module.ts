import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './home/movies/movies.component';
import { ShowsComponent } from './home/shows/shows.component';

const routes: Routes = [
  {path : 'home',
  component: HomeComponent,
    children: [
      {path: '', redirectTo: '/home/movies', pathMatch: 'full'},
      {path: 'movies', component: MoviesComponent},
      {path: 'shows', component: ShowsComponent}
      ]},
    {path: '', redirectTo:'/home/movies', pathMatch: 'full'},
    {path: '**',redirectTo:'/home/movies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
