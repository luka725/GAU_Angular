import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBookings } from '../store/actions/booking.actions';
import { AppState } from '../store/state/app.state';
import { selectBooking, selectBookingLoading, selectBookingError } from '../store/selectors/booking.selectors';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  bookings$!: Observable<any[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.bookings$ = this.store.select(selectBooking);
    this.loading$ = this.store.select(selectBookingLoading);
    this.error$ = this.store.select(selectBookingError);

    this.store.dispatch(loadBookings({ endpoint: 'booking/get' }));
  }
}
