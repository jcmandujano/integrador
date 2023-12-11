import { Injectable } from '@angular/core';
import { Ausencia } from '../shared/ausencia';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class AusenciaService {
  bookingListRef!: AngularFireList<any>;
  bookingRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: Ausencia) {
    return this.bookingListRef.push({
      email: apt.email,
      ausenciaDate: apt.ausenciaDate,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/ausencia/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/ausencia');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id: any, apt: Ausencia) {
    return this.bookingRef.update({
      email: apt.email,
      ausenciaDate: apt.ausenciaDate,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/ausencia/' + id);
    this.bookingRef.remove();
  }
}