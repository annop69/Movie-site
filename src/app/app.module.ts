//modules
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//componenet
import { AppComponent } from './app.component';
import { ShellRouteComponent } from './main/shell/shell.route.component';
import { SidebarMenuComponent } from './shared/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VideoListComponent } from './components/route-component/video-list/video-list.component';
import { VideoDetailComponent } from './components/route-component/video-detail/video-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ShellRouteComponent,
    SidebarMenuComponent,
    FooterComponent,
    VideoListComponent,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [
    DataService,
    {
      provide: APP_INITIALIZER,
      useFactory: SetUpSessionLogger,
      deps: [DataService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function SetUpSessionLogger(setup: DataService){
  return () => setup.initializeApp();
}
