import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employees.service';
import { DevicesService } from './devices.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpreginstructionsComponent } from './add-new-employee/empreginstructions/empreginstructions.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SideBarComponent } from './employee-details/side-bar/side-bar.component';
import { MainDetailsComponent } from './employee-details/main-details/main-details.component';
import { DeventryformComponent } from './employee-details/main-details/deventryform/deventryform.component';
import { DevupdateformComponent } from './employee-details/main-details/devupdateform/devupdateform.component';
import { DeleteConfirmationComponent } from './employee-details/main-details/delete-confirmation/delete-confirmation.component';
import { EmpDeleteConfirmationComponent } from './employee-details/main-details/emp-delete-confirmation/emp-delete-confirmation.component';
import { EmpupdateformComponent } from './employee-details/main-details/empupdateform/empupdateform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AddNewEmployeeComponent,
    EmpreginstructionsComponent,
    EmployeeDetailsComponent,
    SideBarComponent,
    MainDetailsComponent,
    DeventryformComponent,
    DevupdateformComponent,
    DeleteConfirmationComponent,
    EmpDeleteConfirmationComponent,
    EmpupdateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeesService,DevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
