import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { Cv } from "./pages/cv/cv";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Cv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio-Letizia');
}
