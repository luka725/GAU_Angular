import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData } from '../store/actions/data.actions'; // Import loadData action
import { AppState } from '../store/state/app.state';
import { selectData, selectLoading, selectError } from '../store/selectors/data.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookings$!: Observable<any[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.bookings$ = this.store.select(selectData);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    // Dispatch the loadData action with the appropriate endpoint
    this.store.dispatch(loadData({ endpoint: 'booking/get' }));
  }
}
