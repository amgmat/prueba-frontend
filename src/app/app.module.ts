import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
// import { LOCALE_ID}  from '@angular/core';
// import locales from '@angular/common/locales/es-MX';
// import {registerLocaleData} from '@angular/common';
// registerLocaleData(LocaleEs);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatelComponent } from './components/createl/createl.component';
import { ListsComponent } from './components/lists/lists.component';
import { TasksComponent } from './components/tasks/tasks.component';
// import { CreatetComponent } from './components/createt/createt.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ListstComponent } from './components/listst/listst.component';
import { DetailtComponent } from './components/detailt/detailt.component';
import { EdittaskComponent } from './components/edittask/edittask.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatelComponent,
    ListsComponent,
    TasksComponent,
    // CreatetComponent,
    DetailComponent,
    EditComponent,
    ListstComponent,
    DetailtComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
  //  {provide: LOCALE_ID, useValue: 'es-Mx'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
