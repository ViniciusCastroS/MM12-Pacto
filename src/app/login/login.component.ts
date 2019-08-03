import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login implements OnInit {
  profile = ''
  showCNPJ = false;
  showCPF = false;
  oticas = false;
  solutions = false;
  laboratorio = false;

  constructor(private route: Router) {}

  ngOnInit() {
    if (this.route.url === "/login/oticas") {
      this.profile = 'oticas'
      this.oticas = true;
      this.getLoginForm()
    } 
    else if (this.route.url === "/login/solution"){
      this.profile = 'solution'
      this.solutions = true;
      this.getLoginForm()
    }
    else if( this.route.url === "/login/laboratorio"){
      this.profile = 'laboratorio'
      this.laboratorio = true;
      this.getLoginForm()
    }
  }
  getLoginForm() {
    if (this.profile === 'oticas' || this.profile === 'laboratorio') {
      this.showCNPJ = true;
      console.log('cnpj', this.showCNPJ)
    } 
    else{
      this.showCPF = true;
      console.log('cpf', this.showCPF)
      console.log('cpnj', this.showCNPJ)
    }
  }
  logIn(){
    this.route.navigate(['vouchers']);
  }
}