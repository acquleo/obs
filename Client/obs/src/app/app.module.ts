import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';


import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { SPOTIFY_PROVIDERS } from './spotify.service';
import { LoginComponent } from './login/login.component';
import { AppRunningComponent } from './app-running/app-running.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OperatorComponent } from './operator/operator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquareComponent } from './components/square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { RectangleDirective } from './rectangle.directive';
import { ToastrModule } from 'ngx-toastr';
import { BasicAuthInterceptor } from './interceptors/basicauthorization';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: MainBodyComponent , children: 
  [  
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent , data: { animation: 'WelcomePage' }},
    { path: 'operator', component: OperatorComponent, data: { animation: 'WelcomePage' }, canActivate: [AuthGuardService] }
  ]
    

  },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    TrackComponent,
    LoginComponent,
    AppRunningComponent,
    MainBodyComponent,
    FooterComponent,
    HeaderComponent,
    OperatorComponent,
    SquareComponent,
    RectangleComponent,
    RectangleDirective
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularResizedEventModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-center'}), // ToastrModule added
    RouterModule.forRoot(routes), // <-- routes,
  ],
  providers: [
    SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide:HTTP_INTERCEPTORS,useClass:BasicAuthInterceptor,multi:true}    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
