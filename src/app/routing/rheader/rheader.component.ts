import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rheader',
  templateUrl: './rheader.component.html',
  styleUrls: ['./rheader.component.css']
})
export class RheaderComponent implements OnInit {
  login: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.login = this.authService.isLoggedIn;
  }

  toggleState(): void {
    this.login = !this.login;
    this.login == true ?this.authService.login():this.authService.logout(); 
  }
}
