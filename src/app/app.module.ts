import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule,
  MatToolbarModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavRibbonComponent } from './nav-ribbon/nav-ribbon.component';

const jdPdRoutes: Route[] = [{  path: 'register',
    component: RegisterComponent}, {  path: '',
    component: HomeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavRibbonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule, 
    RouterModule.forRoot(jdPdRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
