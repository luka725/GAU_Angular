import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/state/app.state';
import { selectRoom, selectRoomError, selectRoomLoading } from '../store/selectors/room.selectors';
import { loadRooms } from '../store/actions/room.actions';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  rooms$!: Observable<any[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.rooms$ = this.store.select(selectRoom);
    this.loading$ = this.store.select(selectRoomLoading);
    this.error$ = this.store.select(selectRoomError);

    this.store.dispatch(loadRooms({ endpoint: 'roomtypes/getallroomtypewithimages' }));
  }
}
