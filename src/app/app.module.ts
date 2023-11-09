import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GojsAngularModule } from 'gojs-angular';
import { AppComponent } from './app.component';

import { InspectorComponent } from './inspector/inspector.component';
import { InspectorRowComponent } from './inspector/inspector-row.component';
import { InputComponent } from './components/input/input.component';
import {ChipsModule} from "primeng/chips";


@NgModule({
  declarations: [
    AppComponent,
    InspectorComponent,
    InspectorRowComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GojsAngularModule,
    ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
