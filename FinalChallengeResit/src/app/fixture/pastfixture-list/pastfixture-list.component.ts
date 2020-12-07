import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../fixture.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pastfixture-list',
  templateUrl: './pastfixture-list.component.html',
  styleUrls: ['./pastfixture-list.component.css']
})
export class PastfixtureListComponent implements OnInit {
  
  fixtures: any;
 
  constructor(private fixtureService: FixtureService) { }
 
  ngOnInit() {
    this.getFixturesList();
  }
 
  getFixturesList() {
    this.fixtureService.getFixturesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(fixtures => {
      this.fixtures = fixtures;
    });
  }
}