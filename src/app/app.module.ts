import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EnterRecordComponent } from './enter-record/enter-record.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AddUpdateTaxratesComponent } from './add-update-taxrates/add-update-taxrates.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    EnterRecordComponent,
    AddUpdateTaxratesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
