import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  baseURL:string='https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  Users() {
    return this.http.get(this.baseURL);
  }
}
