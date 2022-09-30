import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization: environment.oauthToken
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCtPRxN9eyTGOq2maLFtiJ7xmUW2v9e1G5XgtpY_xwRttKtAQthgb3T0ONnNHoQcmCETLxHlkAqvRTjNaIKem-UMIX2ICYgfFskDQ9EUt5VSN7cxLcO3Ex0twRfP0u2OugvxiQ4pHCVvpoTks5E_nhm_MOQ1NwEfjhGdHYzpa4O9gl6FcItMj3PCARy75rwlDo'
    });
    
    return this.http.get(url, { headers });
  }
}

 
