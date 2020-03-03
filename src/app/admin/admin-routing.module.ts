import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UsersComponent } from './users/users.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { AllPacketComponent } from './all-packet/all-packet.component';
import { EnvironmentListsComponent } from './environment-list/environment-list.component';
import { AuthGuard } from '../../guard/auth/auth.guard';
import { OstypeComponent } from './ostype/ostype.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PostComponent } from './feedback/post/post.component';
import { PostFormComponent } from './feedback/post-form/post-form.component';
import { CategoryComponent } from './category/category.component';

/**
 * Modulo di routing dell'admin. Qui ci sono i percorsi che un admin può seguire:
 * appena fa il login viene caricato nel <router-outlet> di app-component il layout e nel
 * <router-outlet> del layout (come percorsi "children") vengono visualizzati gli altri
 * (qui sotto sono indentati). Si osservi il Guard "canActivate: [AuthGuard]" che protegge le routes
 * del'ADMIN dagli altri utenti.
 *
 * @author Vittorio Valent
 *
 * @see AdminLayoutComponent
 * @see AuthGuard
 * @see layout
 */
const routes: Routes = [
  {
    path: 'admin-dashboard', component: AdminLayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'work-in-progress', component: WorkInProgressComponent },
      { path: 'all-packet', component: AllPacketComponent },
      { path: 'environments', component: EnvironmentListsComponent },
      { path: 'ostype', component: OstypeComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'feedback/post', component: PostComponent },
      { path: 'feedback/post-form', component: PostFormComponent},
      { path: 'category', component: CategoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule{}
