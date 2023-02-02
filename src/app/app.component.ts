import { Component } from '@angular/core';
import { AlbumServiceService } from './album.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  users:any;
  constructor(private album:AlbumServiceService){
    album.Users().subscribe((data)=>this.users=data)
  }

}
