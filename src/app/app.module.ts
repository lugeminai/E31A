import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    TeamComponent,
    AboutusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
