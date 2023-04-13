import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
<<<<<<< HEAD
import { LoginformComponent } from './loginform/loginform.component';


const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'login', component:LoginformComponent},
  {path:'',redirectTo:'login', pathMatch:'full'}
=======
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { VegetableslistComponent } from './vegetableslist/vegetableslist.component';
import { DryFruitsListComponent } from './dry-fruits-list/dry-fruits-list.component';
import { GreenlistComponent } from './greenlist/greenlist.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomePageComponent},
  {path:'Fruits',component:FruitsListComponent},
  {path:'Vegetables',component:VegetableslistComponent},
  {path:'DryFruits',component:DryFruitsListComponent},
  {path:'Greens',component:GreenlistComponent},
  {path:'Login',component:LoginPageComponent},
>>>>>>> ee72c245df59eb5ff7e0c5b8e6380615031aa35e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
