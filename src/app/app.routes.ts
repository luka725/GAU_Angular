import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
export const routes: Routes = [
    { path: "table", component: TableComponent },
    { path: "register", component: RegistrationFormComponent},
    { path: "", component: LoginFormComponent}
];
