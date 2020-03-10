import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryModule } from './inventory/inventory.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InventoryRegisterModule } from './inventory/inventory-register/inventory-register.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,InventoryModule,
    InventoryRegisterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
