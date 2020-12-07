import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorisedusersComponent } from './auth/unauthorisedusers/unauthorisedusers.component';
import { CreateFixtureComponent } from './fixture/create-fixture/create-fixture.component';
import { FixtureListComponent } from './fixture/fixture-list/fixture-list.component';
import { PastfixtureListComponent } from './fixture/pastfixture-list/pastfixture-list.component';

const routes: Routes = [
{ path: '', redirectTo: 'fiixtures', pathMatch: 'full' },
{ path: 'fixtures', component: FixtureListComponent },
{ path: 'addfixture', component: CreateFixtureComponent },
{ path: 'unautherisedUsers', component: UnauthorisedusersComponent },
{ path: 'pastFixtures', component: PastfixtureListComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
