import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, ROUTES } from '@angular/router';
import { routes } from './inventory-router.module';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './inventory-register/register/register.component';


@NgModule({
  declarations: [LoginPageComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
    RouterModule.forChild(routes)
  ]
})
export class InventoryModule { }
