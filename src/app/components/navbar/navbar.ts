import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RouterLink, Router, RouterLinkActive, RouterModule } from "@angular/router";
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, RouterLink, NgClass, RouterLinkActive, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
menuOpen = false
activeSection: string = '';

constructor(private router: Router){}
toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

scrollTo(section: string) {
  this.activeSection = section;

  if (this.router.url !== '/') {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    });
  } else {
   
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

@HostListener('window:scroll', [])
onScroll(){
  const sections = ['chi-sono', 'qualita', 'abilita', 'portfolio', 'futuro']

  for (let section of sections){
  const el = document.getElementById(section)
  if(el){
    const rect= el.getBoundingClientRect()
    if (rect.top <= 150 && rect.bottom >= 150) {
      this.activeSection = section;
    }
  }
  }
}


}
