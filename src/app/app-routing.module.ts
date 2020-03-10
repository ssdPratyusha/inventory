import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './inventory/login-page/login-page.component';
import { RegisterComponent } from './inventory/inventory-register/register/register.component';


const routes: Routes = [
  {
    
      path: '',
      loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)},
      {path:'login', component:LoginPageComponent},
      
      {path:'register', component:RegisterComponent},
      // {
    
      //   path: 'register',
      //   loadChildren: () => import('./inventory/inventory-register.module').then(m => m.InventoryregisterModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
