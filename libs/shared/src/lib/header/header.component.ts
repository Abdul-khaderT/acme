import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { Subscription } from 'rxjs';
import { APP_URL, RoutePaths } from '../enums';
import { LOCATION } from '../enums/Location';
import { AuthService } from '../services/auth.service';
import { getUser, removeUser } from '../utilities';

@Component({
  selector: 'acme-bank-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  constructor(public router: Router, private authService: AuthService){}
  
  @Input() selectedLocation: string= LOCATION.INDIA;
  isLoggedInSubscription: Subscription =  Subscription.EMPTY;
  items: MenuItem[] = []

  ngOnInit(){
    this.items = this.getMenuItems(this.userLoggedIn());
    this.isLoggedInSubscription = this.authService.userloggedIn$.subscribe((loggedIn)=>{
      this.items = this.getMenuItems(loggedIn)
    })
  }

  setLocation(location: string){
    if(location === LOCATION.INDIA){
      window.location.href = APP_URL.INDIA
    }
    else{
      window.location.href = APP_URL.AMERICA
    }
  }

  getMenuItems(loggedIn?: boolean){
    const menus: MenuItem[] = [
      {
        label:'Home (Host App)',
        command: () => this.router.navigate(["/"])
      },
      {
        label:'American Bank (App 1)',
        command: () => this.router.navigate([RoutePaths.AMERICAN_BANK])
      },
      {
        label:'Indian Bank (App 2)',
        command: () => this.router.navigate([RoutePaths.INDIAN_BANK])
      },
      {
          label:'User',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'Login (Library)',
                  command: () => this.router.navigate([RoutePaths.AUTH_LOGIN])
              },
              {
                  label:'Register',
                  command: () => this.router.navigate([RoutePaths.AUTH_REGISTER])
              }
          ],
        visible: !loggedIn,
      },
      {
        label:'Profile  (Library)',
        icon:'pi pi-fw pi-user',
        command: () => this.router.navigate([RoutePaths.PROFILE]),
        visible: loggedIn,
      },
      {
        label:'Logout',
        icon:'pi pi-fw pi-power-off',
        command: () =>  this.logout(),
        visible: loggedIn,
      }
    ];
    return menus
  }

  logout(){
    removeUser()
    this.authService.userloggedIn.next(false);
    this.router.navigate([RoutePaths.AUTH_LOGIN])
  }

  userLoggedIn(){
    return getUser() ? true : false
  }

  ngOnDestroy() {
    this.isLoggedInSubscription?.unsubscribe();
  }
}
