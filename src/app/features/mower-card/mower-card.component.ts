import { Component, Input, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash/unsplash.service';
import { Mower } from '../../models/mower.model';


@Component({
  selector: 'app-mower-card',
  templateUrl: './mower-card.component.html',
  styleUrls: ['./mower-card.component.scss'] // Add your styles here
})
export class MowerCardComponent implements OnInit {
  @Input() mower!: Mower;   // Input property to receive mower data
  photo: any;               // To store the fetched photo

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit(): void {
    this.searchPhoto(); // Fetch photo on initialization
  }

  // Method to view mower details
  viewDetails(mower: Mower): void {
    console.log('Viewing details for:', mower.name);
  }

  // Method to navigate to the booking section
  navigateToBookings(mower: Mower): void {
    console.log('Navigating to bookings for:', mower.name);
  }

  // Method to handle booking action
  bookMower(mower: Mower): void {
    console.log('Booking mower:', mower.name);
  }

  // Fetch photo based on mower name
  searchPhoto(): void {
    const query = this.mower.name; // Use mower name as the search query
    this.unsplashService.searchPhotos(query, 1, 1).subscribe(response => {
      if (response.results && response.results.length > 0) {
        this.photo = response.results[0]; // Store the first photo
        this.mower.imageUrl = this.photo.urls.small; // Assign the image URL to the mower
      } else {
        this.photo = null; // Handle the case when no photos are found
      }
    }, error => {
      console.error('Error fetching photo from Unsplash:', error);
      this.photo = null; // Handle error case
    });
  }
}
