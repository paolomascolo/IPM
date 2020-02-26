import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from 'src/guard/auth/auth.guard';

const routes : Routes = [
  {
    path: 'user-dashboard', children: [
      {path: '', component: UserDashboardComponent}
    ] 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
