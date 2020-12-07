import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Fixture } from '../fixture';
import { FixtureService } from '../fixture.service';

@Component({
  selector: 'app-create-fixture',
  templateUrl: './create-fixture.component.html',
  styleUrls: ['./create-fixture.component.css']
})
export class CreateFixtureComponent implements OnInit {

  fixture: Fixture = new Fixture();
  submitted = false;
 
  constructor(private fixtureService: FixtureService) { }
 
  ngOnInit() {
  }
 
  newFixture(): void {
    this.submitted = false;
    this.fixture = new Fixture();
  }
 
  save() {
    this.fixtureService.createFixture(this.fixture);
    this.fixture = new Fixture();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
