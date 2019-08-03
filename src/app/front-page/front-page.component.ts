import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  profile = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  oticas() {
    this.profile = 'oticas';
    console.log(this.profile)
    this.router.navigate(['login', this.profile]);
  }
  solution() {
    this.profile = 'solution';
    console.log(this.profile)
    this.router.navigate(['login', this.profile]);
  }
  laboratorio() {
    this.profile = 'laboratorio'
    console.log(this.profile)
    this.router.navigate(['login', this.profile]);
  }
}
