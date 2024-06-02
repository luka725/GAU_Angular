import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/state/app.state';
import { loadSingleRooms } from '../store/actions/singleroom.actions';
import { selectSingleRoom, selectSingleRoomError, selectSingleRoomLoading} from '../store/selectors/singleroom.selectors';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

interface Room {
  name: string;
  description: string;
  defaultPrice: number;
  quantity: number;
  maxAdult: number;
  maxChildren: number;
  maxPeople: number;
  facilities: string[];
  images: [{imageData: string}];
}

@Component({
  selector: 'app-singleroom',
  templateUrl: './singleroom.component.html',
  styleUrls: ['./singleroom.component.css']
})
export class SingleroomComponent implements OnInit {
  roomId!: string;
  room$!: Observable<any>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectSingleRoomLoading);
    this.error$ = this.store.select(selectSingleRoomError);

    this.route.params.subscribe(params => {
      this.roomId = params['id'];
      this.store.dispatch(loadSingleRooms({ endpoint: 'roomtypes/getbyidwithimagesandfacilities/', id: parseInt(this.roomId, 10) }));
    });

    this.room$ = this.store.select(selectSingleRoom);
  }
  
  encodeImage(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
