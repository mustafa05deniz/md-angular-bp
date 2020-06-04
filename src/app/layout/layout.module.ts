import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports:[CommonModule  ,BrowserModule    ],
  exports:[HeaderComponent],
  bootstrap:[HeaderComponent]
})
export class LayoutModule { }
