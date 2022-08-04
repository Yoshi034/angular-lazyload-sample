import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A02RoutingModule } from './a02-routing.module';
import { A02Component } from './a02.component';


@NgModule({
  declarations: [
    A02Component
  ],
  imports: [
    CommonModule,
    A02RoutingModule
  ]
})
export class A02Module { }
