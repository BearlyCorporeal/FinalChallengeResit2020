import { Component, OnInit, Input } from '@angular/core';
import { Fixture } from '../fixture';
import { FixtureService } from '../fixture.service';

@Component({
  selector: 'app-pastfixture-details',
  templateUrl: './pastfixture-details.component.html',
  styleUrls: ['./pastfixture-details.component.css']
})
export class PastfixtureDetailsComponent implements OnInit {

  @Input() fixture: Fixture;
 
  constructor(private fixtureService: FixtureService) { }
 
  ngOnInit() {
  }
}