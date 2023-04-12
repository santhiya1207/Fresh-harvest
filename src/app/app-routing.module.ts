import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomePageComponent},
  {path:'Fruits',component:FruitsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
