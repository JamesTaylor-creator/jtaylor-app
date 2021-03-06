import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { OrderBy } from './order.pipe';
import { MembersComponent } from '../members/members.component';
import { ProfileComponent } from '../profile/profile.component';
import { NavComponent } from '../nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    OrderBy,
    MembersComponent,
    ProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
