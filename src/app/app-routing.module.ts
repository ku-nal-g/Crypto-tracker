import { CoinsDetailsComponent } from './components/coins-details/coins-details.component';
import { CoinsListComponent } from './components/coins-list/coins-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // if path is empty it will redirect to coins list
  {
    path: '',
    redirectTo: 'coins-list',
    pathMatch: 'full'
  },
  {
    path: 'coins-list',
    component: CoinsListComponent
  },
  {
    path: 'coin-details/:id',
    component: CoinsDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
