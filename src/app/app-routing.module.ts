import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { MainComponent } from './components/main/main.component';
// import { RegisterComponent } from './register/register.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from '../app/services/auth.guard';

import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  // { path: "main", component: MainComponent },
  // { path: "login", component: LoginComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
