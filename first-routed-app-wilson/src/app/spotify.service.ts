import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD9qjxjQpOMtF_erZnSCQtfYDPl6jsA-nWLT63KMKez0ueaiKhrlFBlU_4SFt2ho42TxawdO6VZGrctETOm1n2PWes0nsjRleoVFgjPaMGvgQhDmateKzLZVRl6FGV-m_69z_v84C2qKAJ0SI-1dcxL_N8WsFYjRtZ-mKs0LUuLR2jguQdnoGsU-IgHx3Tsyy8'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 
  }
}
