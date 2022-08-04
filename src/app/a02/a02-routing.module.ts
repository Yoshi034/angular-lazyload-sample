import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A02Component } from './a02.component';

const routes: Routes = [
  {
    path: '',
    component: A02Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A02RoutingModule {}
