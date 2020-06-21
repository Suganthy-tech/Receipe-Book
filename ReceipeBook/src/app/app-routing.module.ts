import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipeComponent } from './components/receipe/receipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ReceipeDetailComponent } from './components/receipe/receipe-detail/receipe-detail.component';
import { ReceipeStartComponent } from './components/receipe/receipe-start/receipe-start.component';
import { ReceipeEditComponent } from './components/receipe/receipe-edit/receipe-edit.component';

const routes: Routes = [
  // { path: '', redirectTo: '/receipes', pathMatch: 'full' },
  {
    path: 'receipes', component: ReceipeComponent, children: [
      { path: '', component: ReceipeStartComponent }, { path: 'new', component: ReceipeEditComponent },
      { path: ':id', component: ReceipeDetailComponent },

      { path: ':id/edit', component: ReceipeEditComponent }
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
