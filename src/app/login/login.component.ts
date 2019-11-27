import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Llamar una función de un script desde afuera
// Llamar cualquier scripts que se encuentre afuera de angular, con plugins, carruseles, etc
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }

}
