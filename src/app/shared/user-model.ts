export class UserModel {
  id: number;
  name: string;
  email: string;
  address: string;
  dateOfBirth: string;
  gender: string;

  constructor(param?: UserModel) {
if (param) {
  Object.assign(this, param);
}
  }
  static  get exampleUser(): UserModel {
    return {
      id: 0,
    name: 'Berki Tamás',
    email: 'tomiram@citomail.hu',
    address: 'Toldi utca 1.',
    dateOfBirth: '1991.10.25',
    gender: 'male'
    };
  }
  static get emptyUser(): UserModel {
    return {
     id: 0,
     name: '',
     email: '',
     address: '',
     dateOfBirth: '',
     gender: ''
    };
  }
}
