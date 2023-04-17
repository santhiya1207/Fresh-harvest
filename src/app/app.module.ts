import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryAdvantageComponent } from './category-advantage/category-advantage.component';
import { CategoryComponent } from './category/category.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { VegetableslistComponent } from './vegetableslist/vegetableslist.component';
import { DryFruitsListComponent } from './dry-fruits-list/dry-fruits-list.component';
import { GreenlistComponent } from './greenlist/greenlist.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TeamComponent } from './team/team.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    LoginformComponent,
    CategoryAdvantageComponent,
    CategoryComponent,
    FruitsListComponent,
    VegetableslistComponent,
    DryFruitsListComponent,
    GreenlistComponent,
    FooterComponent,
    RegisterComponent,
    TeamComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
