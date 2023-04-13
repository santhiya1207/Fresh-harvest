import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginformComponent } from './loginform/loginform.component';


const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'login', component:LoginformComponent},
  {path:'',redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
