import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

  goToAusencias(){
    this.router.navigate(['/solicita-ausencia'])
  }
}
