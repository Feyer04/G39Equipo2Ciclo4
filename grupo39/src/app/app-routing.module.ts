import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'productos',component: ProductosComponent},
  {path:'dasboard',component: DashboardComponent},
  {path:'login',component: LoginComponent},
  {path:'', component:DashboardComponent,pathMatch:'full'},
  {
    path: '**',
    redirectTo: 'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
