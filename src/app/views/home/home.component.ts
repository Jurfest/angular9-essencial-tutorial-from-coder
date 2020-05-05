import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _headerservice: HeaderService) {
    _headerservice.headerData = {
      title: 'Home',
      icon: 'home',
      routeUrl: ''
    }
   }

  ngOnInit(): void {
  }

}

