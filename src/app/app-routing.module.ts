import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'a01',
    loadChildren: () => import('./a01/a01.module').then((m) => m.A01Module),
  },
  {
    path: 'a02',
    loadChildren: () => import('./a02/a02.module').then((m) => m.A02Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
