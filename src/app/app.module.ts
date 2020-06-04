import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './services/crud.service';
import { TaskService } from './services/task.service';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MyHomeChildComponent } from './home/my_child_component/child';
import { CompaniesComponent } from './companies/companies.component';
import { MyCompanyChildComponent } from './companies/my_child_component/child';

import { DxDataGridModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HomeComponent,
    SetupComponent,
    AboutComponent,
    MyCompanyChildComponent,
    CompaniesComponent,
    MyHomeChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatCardModule,
    DxDataGridModule
  ],
  providers: [CrudService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
