import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule,
  MatToolbarModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavRibbonComponent } from './nav-ribbon/nav-ribbon.component';

/** Services */
import { PatientService } from './shared/services/patient/patient.service';

const jdPdRoutes: Route[] = [{
  path: 'register',
  component: RegisterComponent
}, {
  path: '',
  component: HomeComponent
}];

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
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDatepickerModule, MatNativeDateModule,
    HttpClientModule, FormsModule,
    RouterModule.forRoot(jdPdRoutes)
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
