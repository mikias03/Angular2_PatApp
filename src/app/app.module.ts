import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { requestOptionsProvider }   from './default-request-options.service';
import { FormsModule }   from '@angular/forms';
import { AppComponent }             from './app.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { PatientComponent }        from './Patient/patient.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    Ng2PaginationModule
  ],
  declarations: [
    AppComponent,
    PatientComponent
  ],
  providers: [ requestOptionsProvider ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}





/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/