import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  usersRef: AngularFireList<any>;      // Reference to users list, Its an Observable
  userRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too


  constructor(private db: AngularFireDatabase) {
  }   // Inject AngularFireDatabase dependency in constructor


  // Create User
  addUser(user: User): void {
    this.usersRef.push({
      name: user.name,
      email: user.email,
      contact: user.contact
    });
  }

  // Read User
  getUser(id: string): AngularFireObject<any> {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  // Read Users List
  getUsersList(): AngularFireList<any> {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }

  // Update User
  updateUser(user: User): void {
    this.userRef.update({
      name: user.name,
      email: user.email,
      contact: user.contact
    });
  }

  // Delete User
  deleteUser(id: string): void {
    this.userRef = this.db.object('users-list/' + id);
    this.userRef.remove();
  }

}
