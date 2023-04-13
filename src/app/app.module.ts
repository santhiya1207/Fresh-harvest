import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
>>>>>>> ee72c245df59eb5ff7e0c5b8e6380615031aa35e
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD

import { LoginformComponent } from './loginform/loginform.component';
=======
import { CategoryAdvantageComponent } from './category-advantage/category-advantage.component';
import { CategoryComponent } from './category/category.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { VegetableslistComponent } from './vegetableslist/vegetableslist.component';
import { DryFruitsListComponent } from './dry-fruits-list/dry-fruits-list.component';
import { GreenlistComponent } from './greenlist/greenlist.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
>>>>>>> ee72c245df59eb5ff7e0c5b8e6380615031aa35e



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
<<<<<<< HEAD
    LoginformComponent
     
=======
    CategoryAdvantageComponent,
    CategoryComponent,
    FruitsListComponent,
    VegetableslistComponent,
    DryFruitsListComponent,
    GreenlistComponent,
    LoginPageComponent,
 
>>>>>>> ee72c245df59eb5ff7e0c5b8e6380615031aa35e
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,ReactiveFormsModule,
 
  
=======
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
>>>>>>> ee72c245df59eb5ff7e0c5b8e6380615031aa35e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
