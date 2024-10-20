import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Booking {
  customerName: string;
  machineName: string;
  bookingDate: Date;
  status: string;
  operator: string;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  displayedColumns: string[] = ['customerName', 'machineName', 'bookingDate', 'status', 'operator'];
  dataSource: Booking[] = [];

  constructor() {}

  ngOnInit(): void {
    // Example data for the bookings
    this.dataSource = [
      {
        customerName: 'John Doe',
        machineName: 'Lawn Mower A',
        bookingDate: new Date('2024-10-20'),
        status: 'Confirmed',
        operator: 'Operator A'
      },
      {
        customerName: 'Jane Smith',
        machineName: 'Mower B',
        bookingDate: new Date('2024-10-21'),
        status: 'Pending',
        operator: 'Operator B'
      },
      // Add more booking records as needed
    ];
  }
   /**
   * Create Customer Initials
   */
   getInitials(name: string): string {
    const firstNameInitial = name ? name.charAt(0).toUpperCase() : '';
    return `${firstNameInitial}`;
  }

}
