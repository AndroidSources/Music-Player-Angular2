import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {NavBarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  declarations: [AppComponent, NavBarComponent, routingComponents],
  bootstrap: [AppComponent]
})
export class AppModule {
}
