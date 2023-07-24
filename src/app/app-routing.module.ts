//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ShellRouteComponent } from './main/shell/shell.route.component';
import { VideoListComponent } from './components/route-component/video-list/video-list.component';
import { VideoDetailComponent } from './components/route-component/video-detail/video-detail.component';

import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  { path:'', component: ShellRouteComponent,
    children: [
      { path: '', component: VideoListComponent },
      { path: 'video-details', component: VideoDetailComponent, canActivate: [AuthenticationGuard] }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
