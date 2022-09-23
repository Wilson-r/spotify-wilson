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
        'Bearer BQDoVTdPxWBJRzadAim6uFd1hKxZjFOJ8div4j3vVUkQvgDUumneN2khj4Vwl4UPlzxmwUYVS9Gh2mZYmOe-TD0EAAY2c7D1iGDi_oIdKJB_tluf8XsaDDINRIbVFx9m-1U6sAeHSHIkdnJeBgwRmeMqo2ZF-gZaEgOeBTODuztHkkOUjdUbejh3q2O7oO08MVs'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 
  }
}
