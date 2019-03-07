import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginUser, LogoutUser } from './store/actions/user.actions';
import { User } from './models/user.model';
import { getUserState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private store: Store<User>) {
    this.store.dispatch(new LoginUser({name: 'boris'}));
  }

  ngOnInit(): void {
    this.store.select(getUserState).subscribe( (userState) => {console.log(userState);this.title = userState.user.name});
  }

  onLogoutClick() {
    this.store.dispatch(new LogoutUser())
  }
}
