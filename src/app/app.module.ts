import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxListMinimapComponent } from 'projects/ngx-list-minimap/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxListMinimapComponent
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
