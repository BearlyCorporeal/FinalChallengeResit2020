import { Component, OnInit, Input } from '@angular/core';
import { Fixture } from '../fixture';
import { FixtureService } from '../fixture.service';

@Component({
  selector: 'app-fixture-details',
  templateUrl: './fixture-details.component.html',
  styleUrls: ['./fixture-details.component.css']
})
export class FixtureDetailsComponent implements OnInit {
  
  @Input() fixture: Fixture;
 
  constructor(private fixtureService: FixtureService) { }
 
  ngOnInit() {
  }
 
  updateFixture(isPlayed: boolean,costamount: number,person: string) {
    this.fixtureService
      .updateFixture(this.fixture.key, { played: isPlayed })
      .catch(err => console.log(err));
    this.fixtureService
      .updateFixture(this.fixture.key, { cost: costamount })
      .catch(err => console.log(err));
    this.fixtureService
      .updateFixture(this.fixture.key, { payedby: person })
      .catch(err => console.log(err));
  }
 
  deleteFixture() {
    this.fixtureService
      .deleteFixture(this.fixture.key)
      .catch(err => console.log(err));
  }
 
}