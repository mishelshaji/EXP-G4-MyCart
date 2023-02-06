import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

const routes: Routes = [
  {
   path: '', component:UserLayoutComponent, children:[
    {path: 'login', component: LoginComponent}
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
