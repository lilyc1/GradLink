import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private db: AngularFireDatabase) {}

  // storing data
  addData(path: string, data: any) {
    return this.db.list(path).push(data);
  }

  // retrieving data
  getData(path: string) {
    return this.db.list(path).valueChanges();
  }

  getUserProfile(uid: string): Observable<any> {
    return this.db.object(`users/${uid}`).valueChanges();
  }
}
