import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { HomePage } from "./home-page/home-page";
import { Menu } from "./menu/menu";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, HomePage, Menu],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
