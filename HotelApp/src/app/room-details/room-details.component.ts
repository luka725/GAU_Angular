import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

interface RoomDetails {
  roomTypeId: number;
  name: string;
  defaultPrice: number;
  quantity: number;
  isDelete: boolean;
  description: string;
  maxAdult: number;
  maxChildren: number;
  maxPeople: number;
  facilities: string[] | null;
  image: string | null;
}

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  @Input() room!: RoomDetails;

  constructor(private sanitizer: DomSanitizer, private router: Router) {}

  encodeImage(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  navigateToSingleRoom(room:any){
    this.router.navigate(['/room', room.roomTypeId]);
  }
  ngOnInit(): void { }
}
