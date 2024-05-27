import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeamMembers() {
    return [
      { name: 'Esther Howards', position: 'Founder & CEO', img: 'assets/images/image1.jfif' },
      { name: 'Cameron Williamson', position: 'Marketing Head', img: 'assets/images/image2.jfif' },
      { name: 'Liam Cooper', position: 'Marketing Head', img: 'assets/images/image3.jfif' }
    ];
  }
}
