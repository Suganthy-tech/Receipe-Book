import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceipeComponent } from './components/receipe/receipe.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ReceipeDetailComponent } from './components/receipe/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './components/receipe/receipe-item/receipe-item.component';
import { ReceipeListComponent } from './components/receipe/receipe-list/receipe-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { appDropdownDirective } from './components/shared/appdropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReceipeComponent,
    ShoppingListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ReceipeListComponent,
    ShoppingListEditComponent,
    HeaderComponent, appDropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
