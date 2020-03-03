import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UsersComponent } from './users/users.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { AllPacketComponent } from './all-packet/all-packet.component';
import { PacketComponent } from './all-packet/packet/packet.component';
import { PacketDetailComponent } from './all-packet/packet-detail/packet-detail.component';
import { EnvironmentListsComponent } from './environment-list/environment-list.component';
import { OstypeComponent } from './ostype/ostype.component';
import { EnvironmentDetailsComponent } from './environment-list/environment-details/environment-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PostComponent } from './feedback/post/post.component';
import { PostFormComponent } from './feedback/post-form/post-form.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';


/**
 * Modulo dell'admin, qui vengono dichiarate le component che utilizza 
 * l'admin. Questo modulo importa AdminRoutingModule.
 * 
 * @author Vittorio Valent
 * 
 * @see AdminRoutingModule
 */
@NgModule({
  declarations: [AdminDashboardComponent,
    EnvironmentDetailsComponent,
    UserDashboardComponent,
    UsersComponent,
    WorkInProgressComponent,
    UserDetailsComponent,
    AllPacketComponent,
    PacketComponent,
    PacketDetailComponent,
    EnvironmentListsComponent,
    OstypeComponent,
    FeedbackComponent,
    PostComponent,
    PostFormComponent,
    CategoryComponent,
    CategoryDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
