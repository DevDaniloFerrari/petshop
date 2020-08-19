import { Security } from './../../../utils/security.util';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public user: User;

  ngOnInit(): void {
    this.user = Security.getUser();
  }

}
