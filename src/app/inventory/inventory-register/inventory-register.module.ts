import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, ROUTES } from '@angular/router';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routes } from '../inventory-router.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
     RouterModule.forChild(routes)
  ]
})
export class InventoryRegisterModule { }
