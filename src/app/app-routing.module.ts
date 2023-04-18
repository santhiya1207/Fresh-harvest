import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { VegetableslistComponent } from './vegetableslist/vegetableslist.component';
import { DryFruitsListComponent } from './dry-fruits-list/dry-fruits-list.component';
import { GreenlistComponent } from './greenlist/greenlist.component';
import { RegisterComponent } from './register/register.component';
import { AddcartComponent } from './addcart/addcart.component';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomePageComponent},
  {path:'Fruits',component:FruitsListComponent},
  {path:'Vegetables',component:VegetableslistComponent},
  {path:'DryFruits',component:DryFruitsListComponent},
  {path:'Greens',component:GreenlistComponent},
  {path:'Login',component:LoginformComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Cart', component:AddcartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
