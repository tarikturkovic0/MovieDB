import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './shared/content/content.component';
import { MoviesComponent } from './home/movies/movies.component';
import { ShowsComponent } from './home/shows/shows.component';
import { ContentWindowComponent } from './shared/content/content/content-window.component';
import { SafeUrlPipe } from './home/pipes/safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    MoviesComponent,
    ShowsComponent,
    ContentWindowComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
