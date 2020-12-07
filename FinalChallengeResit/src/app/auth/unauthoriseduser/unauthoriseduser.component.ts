import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-unauthoriseduser',
  templateUrl: './unauthoriseduser.component.html',
  styleUrls: ['./unauthoriseduser.component.css']
})
export class UnauthoriseduserComponent implements OnInit {

  
  @Input() user: User;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
  }
 
  updateUser(isAuth: boolean) {
    this.userService
      .updateUser(this.user.key, { auth: isAuth })
      .catch(err => console.log(err));
  }
 
  deleteUser() {
    this.userService
      .deleteUser(this.user.key)
      .catch(err => console.log(err));
  }
 
}