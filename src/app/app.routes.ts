import { RouterModule, Routes } from '@angular/router';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserProfileComponentComponent } from './user-profile-component/user-profile-component.component';
export const routes: Routes = [
    { path: 'users', component: UserListComponentComponent },
    { path: 'users/:id', component: UserProfileComponentComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
];
