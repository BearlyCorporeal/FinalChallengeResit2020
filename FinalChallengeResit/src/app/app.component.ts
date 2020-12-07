import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './auth/user';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalChallengeResit';
  isSignedin = false;
  isAuth = false
  users: any;
  user: User = new User();
  submitted = false;
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

  OnSignin(pemail:string,ppassword:string){
    this.users.forEach(User => {
      if(User.email == pemail){
        if(User.password == ppassword){
          this.isSignedin = true
          if(User.auth == true){
            this.isAuth = true
          }
        }
      }
    });
    console.log(this.isSignedin)
  }
  OnSignout(){
    this.isSignedin = false
    this.isAuth = false
  }
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
 
  save() {
    this.userService.createUser(this.user);
    this.user = new User();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}