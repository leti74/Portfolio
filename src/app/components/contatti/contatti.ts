import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  imports: [NgClass],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
})
export class Contatti {
  showEmail = false;

  toggleEmail() {
    this.showEmail = !this.showEmail;
  }
}
