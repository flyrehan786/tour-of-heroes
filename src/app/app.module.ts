import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroNewComponent } from './components/hero-new/hero-new.component';
import { HeroHistoryComponent } from './components/hero-history/hero-history.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroService } from './services/hero.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroNewComponent,
    HeroHistoryComponent,
    HeroListComponent,
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot([ 
      { path: '', component: DashboardComponent },
      { path: 'list', component: HeroDetailsComponent },
      { path: 'new', component: HeroNewComponent },
      { path: 'details', component: HeroDetailsComponent },
    ]),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
