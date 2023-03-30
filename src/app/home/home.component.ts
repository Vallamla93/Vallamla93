import { Component, OnInit } from '@angular/core';
import { IListing, ListingService } from '../services/listing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listings: IListing[] = [];
  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    this.listingService.getListings().subscribe((data) => {
      this.listings = data;
    });
    console.log(this.listings);
  }
}
