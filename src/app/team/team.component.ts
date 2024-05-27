import { Component } from '@angular/core';
import { TeamService } from '../services/team/team.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers: any[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamMembers = this.teamService.getTeamMembers();
    console.log(this.teamMembers)
  }
}
