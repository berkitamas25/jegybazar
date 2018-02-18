import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from './user-model';
import {EventModel} from './event-model';

@Injectable()
export class UserService {
  isLoggedin = false;
  private _user: UserModel;
  private _allUsers: UserModel[];

  constructor(private _router: Router) {
    this._allUsers = [
      new UserModel({
        'id': 1,
        'name': 'Berki Tamás',
        'email': 'berkitamas25@gmail.com',
        'address': 'itt lakom 12',
        'dateOfBirth': '1991-10-25',
        'gender': 'male'
      }),
      new UserModel({
        'id': 2,
        'name': 'Kis-Gere Vivien',
        'email': 'berkitamas25@gmail.com',
        'address': 'itt lakom 12',
        'dateOfBirth': '1991-10-25',
        'gender': 'female'
      }),
      new UserModel({
        'id': 3,
        'name': 'Hello Imre',
        'email': 'berkitamas25@gmail.com',
        'address': 'itt lakom 12',
        'dateOfBirth': '1991-10-25',
        'gender': 'male'
      })
    ];
  }

  login(email: string, password: string): boolean {
    if (email === 'angular' && password === 'angular') {
        this._user = new UserModel(UserModel.exampleUser);
      this.isLoggedin = true;
      this._router.navigate(['/home']);
    }
    console.log('be vagyunk-e lepve: ', this.isLoggedin);
    return false;
  }
  register(param?: UserModel) {
    if (param) {
      this._user = new UserModel(param);
    } else {
      this._user = new UserModel(UserModel.exampleUser);
    }
    this.isLoggedin = true;
    console.log('be vagyunk-e lepve:', this.isLoggedin);
    this._router.navigate(['/user']);
  }

  logOut() {
    this._user = new UserModel();
    this.isLoggedin = false;
    console.log('be vagyunk-e lepve:', this.isLoggedin);
    this._router.navigate(['/home']);
  }
  getUserById(id: number) {
      const user = this._allUsers.filter(u => u.id === id);
      return user.length > 0 ? user[0] : new UserModel(UserModel.emptyUser);

  }
  getCurrentUser() {
    return this._user;
  }
}
