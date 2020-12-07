import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-unauthorisedusers',
  templateUrl: './unauthorisedusers.component.html',
  styleUrls: ['./unauthorisedusers.component.css']
})
export class UnauthorisedusersComponent implements OnInit {

  users: any;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.getUsersList();
  }
 
  getUsersList() {
    this.userService.getUsersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }
}
