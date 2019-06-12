import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: ``, redirectTo: `/login`, pathMatch: `full`},
  /*lazy-load fail*/
  /*{path: `login`, loadChildren: './login/login.module#LoginModule'},*/
  {path: ``, redirectTo: `/login`, pathMatch: `full`},
  {path: `login`, component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
