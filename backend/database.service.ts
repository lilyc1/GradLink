import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

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
}
