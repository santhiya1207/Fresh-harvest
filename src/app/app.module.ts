import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoryAdvantageComponent } from './category-advantage/category-advantage.component';
import { CategoryComponent } from './category/category.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { VegetableslistComponent } from './vegetableslist/vegetableslist.component';
import { DryFruitsListComponent } from './dry-fruits-list/dry-fruits-list.component';
import { GreenlistComponent } from './greenlist/greenlist.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    CategoryAdvantageComponent,
    CategoryComponent,
    FruitsListComponent,
    VegetableslistComponent,
    DryFruitsListComponent,
    GreenlistComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IonicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
