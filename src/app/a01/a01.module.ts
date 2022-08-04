import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A01RoutingModule } from './a01-routing.module';
import { A01Component } from './a01.component';


@NgModule({
  declarations: [
    A01Component
  ],
  imports: [
    CommonModule,
    A01RoutingModule
  ]
})
export class A01Module { }
