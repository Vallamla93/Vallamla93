import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IListing {
  _id: string;
  id: number;
  name: string;
  description: string;
  propertyType: string;
  cancellationPolicy: string;
  accommodates: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  price: number;
  guestsIncluded: number;
  numberOfReviews: number;
  rating: number;
  amenities: string[];
  images: IImage;
  hostInfo: IHost;
  location: ILocation;
  address: IAddress;
  rules: string;
}

interface IImage {
  pictureUrl: string;
  thumbnailUrl: string;
}

interface IAddress {
  building: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

interface IHost {
  name: string;
  id: number;
  address: IAddress;
  contactNo: string;
  hostIdentityVerified: boolean;
}

interface ILocation {
  lat: string;
  lng: string;
}

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}
  getListings(): Observable<IListing[]> {
    return this.http.get<IListing[]>('http://localhost:5500/api/properties');
  }
}
