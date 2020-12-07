import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../fixture.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.css']
})
export class FixtureListComponent implements OnInit {

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
