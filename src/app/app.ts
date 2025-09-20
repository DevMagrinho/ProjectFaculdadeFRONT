import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { HomePage } from "./home-page/home-page";
import { Menu } from "./menu/menu";
import { Login } from "./login/login";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, HomePage, Menu, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
