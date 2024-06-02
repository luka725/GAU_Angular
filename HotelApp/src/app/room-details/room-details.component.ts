import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) {}

  encodeImage(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  ngOnInit(): void { }
}
