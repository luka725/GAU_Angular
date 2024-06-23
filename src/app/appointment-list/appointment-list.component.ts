import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnifiedService } from '../services/unified.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: any[] = [];
  pageSizeOptions = [5, 10, 25];
  pageSize = 10;
  currentPage = 1;
  totalItems = 0;
  filterForm: FormGroup;

  displayedColumns: string[] = [
    'patientName',
    'doctorName',
    'appointmentType',
    'status',
    'paymentStatus',
    'appointmentDateTime',
    'actions'
  ];

  constructor(private appointmentService: UnifiedService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      doctorName: [''],
      patientName: [''],
      appointmentType: [''],
      paymentStatus: ['']
    });
  }

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    const params = {
      doctorName: this.filterForm.value.doctorName,
      patientName: this.filterForm.value.patientName,
      appointmentType: this.filterForm.value.appointmentType,
      paymentStatus: this.filterForm.value.paymentStatus,
      page: this.currentPage,
      pageSize: this.pageSize
    };

    this.appointmentService.getAppointments(params).pipe(
      tap(response => {
        console.log('API Response:', response); // Debugging the response
        if (Array.isArray(response)) {
          this.appointments = response;
          this.totalItems = response.length + 10; // Assuming totalItems is the length of the response array
        } else {
          console.error('Unexpected API response structure:', response);
          this.appointments = [];
          this.totalItems = 0;
        }
        console.log('Appointments:', this.appointments); // Debugging the appointments array
      }),
      catchError(error => {
        console.error('Error fetching appointments:', error);
        return of([]);
      })
    ).subscribe();
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.fetchAppointments();
  }
  
  onFilterChange(): void {
    this.currentPage = 0; // Reset to first page when filters change
    this.fetchAppointments();
  }
}
