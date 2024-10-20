// src/app/components/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../../services/machines/machine.service';
import { Mower } from '../../../models/mower.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mowerList: Mower[] = []; // Array to hold mower data
  errorMessage: string | null = null; // Variable to hold error messages

  constructor(private machineService: MachineService) {} // Inject MachineService

  ngOnInit(): void {
    this.fetchMowers(); // Fetch mower data when the component initializes
  }

  // Method to fetch mowers from the service
  fetchMowers(): void {
    this.machineService.getMachines().subscribe({
      next: (data) => {
        this.mowerList = data; // Assign the retrieved data to the mowerList
      },
      error: (err) => {
        this.errorMessage = err; // Assign the error message to the variable
        console.error('Error fetching mowers:', err);
      }
    });
  }
}
