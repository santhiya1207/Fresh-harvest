import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { VegetableslistComponent } from './vegetableslist/vegetableslist.component';
import { DryFruitsListComponent } from './dry-fruits-list/dry-fruits-list.component';
import { GreenlistComponent } from './greenlist/greenlist.component';


const routes: Routes = [
  {path:'',redirectTo:'/Login',pathMatch:'full'},
  {path:'Home',component:HomePageComponent},
  {path:'Fruits',component:FruitsListComponent},
  {path:'Vegetables',component:VegetableslistComponent},
  {path:'DryFruits',component:DryFruitsListComponent},
  {path:'Greens',component:GreenlistComponent},
  {path:'Login',component:LoginformComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
