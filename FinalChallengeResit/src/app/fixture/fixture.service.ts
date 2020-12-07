import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Fixture } from './fixture'

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  private dbPath = '/fixtures';
 
  fixturesRef: AngularFireList<Fixture> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.fixturesRef = db.list(this.dbPath);
  }
 
  createFixture(fixture: Fixture): void {
    this.fixturesRef.push(fixture);
  }
 
  updateFixture(key: string, value: any): Promise<void> {
    return this.fixturesRef.update(key, value);
  }
 
  deleteFixture(key: string): Promise<void> {
    return this.fixturesRef.remove(key);
  }
 
  getFixturesList(): AngularFireList<Fixture> {
    return this.fixturesRef;
  }
}
