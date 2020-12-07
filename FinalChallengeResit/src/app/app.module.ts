import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFixtureComponent } from './fixture/create-fixture/create-fixture.component';
import { FixtureDetailsComponent } from './fixture/fixture-details/fixture-details.component';
import { FixtureListComponent } from './fixture/fixture-list/fixture-list.component';
import { UnauthorisedusersComponent } from './auth/unauthorisedusers/unauthorisedusers.component';
import { UnauthoriseduserComponent } from './auth/unauthoriseduser/unauthoriseduser.component';
import { PastfixtureListComponent } from './fixture/pastfixture-list/pastfixture-list.component';
import { PastfixtureDetailsComponent } from './fixture/pastfixture-details/pastfixture-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFixtureComponent,
    FixtureDetailsComponent,
    FixtureListComponent,
    UnauthorisedusersComponent,
    UnauthoriseduserComponent,
    PastfixtureListComponent,
    PastfixtureDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
