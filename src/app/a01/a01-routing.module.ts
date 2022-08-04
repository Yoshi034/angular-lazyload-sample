import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A01Component } from './a01.component';

const routes: Routes = [
  {
    path: '',
    component: A01Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A01RoutingModule {}
