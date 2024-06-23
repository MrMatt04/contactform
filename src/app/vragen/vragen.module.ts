import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export interface VragenModule {
  name: string;
  email: string;
  phoneNum: string;
  woonplaats: string;
  adress: string;
  Onderwerp: string;
  bericht: string;
 }
